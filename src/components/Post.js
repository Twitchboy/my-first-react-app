import react, {Component} from 'react';
import PostEditor from './PostEditor';
import PostView from './PostView';
import CommentList from './CommentList';
import {get, post, put} from '../utils/request';
import url from '../utils/url';
import '../assets/css/post.css';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            comments: [],
            editing: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handlePostCancel = this.handlePostCancel.bind(this);
        this.handlePostSave = this.handlePostSave.bind(this);
    }

    // 组件已挂载到 DOM后执行
    componentDidMount(){
        // 进入Post详情，首先需要获取 Post 详情数据、和 Post 评论列表数据
        this.refreshComments();
        this.refreshPost();
    }

    refreshPost() {
        const postId = this.props.match.params.id;
        get(url.getPostById(postId)).then(data => {
            if (!data.error && data.length === 1) {
                this.setState({
                    post: data[0]
                })
            }
        })
    }

    // 获取评论列表
    refreshComments () {
        const postId = this.props.match.params.id;
        get(url.getCommentList(postId)).then(data => {
            if (!data.error) {
                this.setState({
                    comments: data
                })
            }
        })
    }

    // 让帖子处于编辑状态
    handleEditClick () {
        this.setState({
            editing: true
        })
    }

    // 处理保存帖子（编辑状态中）
    handlePostSave () {
        const postId = this.props.match.params.id;
        this.savePost(postId, data);
    }

    // 取消编辑帖子
    handlePostCancel () {
        this.setState({
            editing: false
        })
    }

    // 处理新建评论
    handleCommentSubmit (content) {
        const postId = this.props.match.params.id;
        const comment = {
            author: this.props.userId,
            post: postId,
            content: content
        };

        this.saveComment(comment);
    }

    // 同步帖子的修改到服务器
    savePost(id, post) {
        put(url.updatePost(id), post).then(data => {
            if(!data.error) {
                /**
                 * 因为返回的帖子对象只有 author 的 id 信息，
                 * 所以需要额外把完整的author信息合并到帖子对象中
                 */
                const newPost = {...data, author: this.props.post.author};
                this.setState({
                    post: newPost,
                    editing: false
                })
            }
        })
    }

    // 保存新评论到服务器
    saveComment(comment) {
        post(url.createComment(), comment).then(data => {
            if(!data.error) {
                this.refreshComments(); // 保存成功，刷新评论列表
            }
        })
    }


    render () {
        const {post, comments, editing} = this.state;
        const {userId} = this.props;

        if (!post) {
            return null;
        }
        const editable = userId === post.author.id; // 校验当前用户是否是此帖子的作者

        return(
            <div className="post">
                {
                    editing ? (
                        <PostEditor
                            post={post}
                            onSave={this.handlePostSave}
                            onCancel={this.handlePostCancel}
                        />
                    ) : (
                        <PostView
                            post={post}
                            editable={editable}
                            onEditClick={this.handleEditClick}
                        />
                    )
                }
                <CommentList
                    components={comments}
                    editable={Boolean(userId)}
                    onSubmit={this.handleCommentSubmit}
                />
            </div>
        );
    }
};

export default Post;
