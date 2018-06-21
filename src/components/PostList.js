import React, {Component} from 'react';
import PostEditor from './PostEditor';
import PostsView from './PostsView';
import {get, post} from '../utils/request';
import url from '../utils/url';
import '../assets/css/postList.css';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: false
        };

        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.refreshPostList = this.refreshPostList.bind(this);
    }

    componentDidMount(){
        this.refreshPostList()
    }

    handleNewPost () {
        this.setState({
            newPost: true
        });
    }

    handleCancel () {
        this.setState({
            newPost: false
        });
    }

    handleSave (data) {
        // 当前登录用户的信息和默认的点赞数，同帖子的标题和内容，共同构成最终保存的帖子对象
        const postData = {...data, author: this.props.userId, vote: 0 };
        post(url.createPost(), postData).then(data => {
            if (!data.error) {
                // 保存成功后，刷新列表
                this.refreshPostList();
            }
        })
    }

    refreshPostList () {
        // 调用后台API获取列表数据，并将返回的数据设置到 state 中
        get(url.getPostList()).then(data => {
            if (!data.error) {
                this.setState({
                    posts: data,
                    newPost: false
                })
            }
        })
    }

    render(){
        const { userId } = this.props;
        return(
            <div className="postList">
                <div>
                    <h2>帖子列表</h2>
                    {/* 只有在登录状态，才显示发帖按钮 */}
                    {
                        userId ? <button onClick={this.handleNewPost}>发帖</button> : null
                    }
                </div>
                {/* 若当前正在创建新帖子，则渲染 PostEditor 组件 */}
                {
                    this.state.newPost ? ( <PostEditor onSave={this.handleSave} onCancel={this.handleCancel}/> ) : null
                }
                {/* PostsView 显示帖子的列表数据 */}
                <PostsView posts={this.state.posts} />
            </div>
        );
    }
};

export default PostList;
