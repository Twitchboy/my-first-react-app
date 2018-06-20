import react, {Component} from 'react';
import CommentsView from './CommentsView';
import {getFormatDate} from '../utils/date';
import "../assets/css/commentList.css"

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
    }

    // 处理新评论内容的变化
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    // 保存新评论
    handleCommentClick () {
        const content = this.state.value;
        if (content.length > 0) {
            this.props.onSubmit(content);
            this.setState({
                value: ''
            });
        } else {
            alert("评论不为空")
        }
    }

    render () {
        const {comments, editable} = this.props;
        return(
            <div className="commentList">
                <div className="title">评论</div>
                {/* 只有登录状态才允许评论 */}
                {
                    editable ? (
                        <div className="editor">
                            <textarea
                                placeholder="说说你的看法"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <button onClick={this.handleCommentClick}>提交</button>
                        </div>
                    ) : null
                }
                <CommentsView comments={comments} />
            </div>
        );
    }

}

export default CommentList;
