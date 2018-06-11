import React from 'react';
import PropTypes from 'prop-types'
import './css/postitem.css';

// 类组件
class PostItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            editing: false,
            post: props.post
        }

        // 组件方法
        // this.handleVoteClick = this.handleVoteClick.bind(this) // => 这里使用了 ES7语法 属性初始化语法
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleEditPost = this.handleEditPost.bind(this)
    }

    componentWillReceiveProps (nextProps) {
        if (this.state.post !== nextProps.post) {
            this.setState({
                post: nextProps.post
            })
        }
    }

    // es7 初始化语法
    handleVoteClick = () => {
        this.props.onVote(this.state.post.id)
    }

    // 标题发生改变触发
    handleTitleChange (event) {
        const newPost = { ...this.state.post, title: event.target.value }
        this.setState({
            post: newPost
        })
    }

    // 编辑状态的改变
    handleEditPost () {
        const editing = this.state.editing;

        // 当前处于编辑模式，点击保存触发父组件 onSave 方法保存新post数据
        if (editing) {
            this.props.onSave({
                ...this.state.post,
                date: this.getFormatDate()
            })
        }

        this.setState({
            editing: !editing
        })
    }

    // 日期格式化
    getFormatDate () {
        const date = new Date();
        const year = date.getFullYear(); // 年份
        let month = date.getMonth() + 1 + ""; // 月， 默认是 0 - 11；自动转 string
        month = month.length === 1 ? "0" + month : month; // 个位数，添 0
        let day = date.getDate() + "";
        day = day.length === 1 ? "0" + day : day;
        let hours = date.getHours() + "";
        hours = hours.length === 1 ? "0" + hours : hours;
        let minutes = date.getMinutes() + "";
        minutes = minutes.length === 1 ? "0" + minutes : minutes;
        let seconds = date.getSeconds() + "";
        seconds = seconds.length === 1 ? "0" + seconds : seconds;
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

    handleChange (event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    // 组件更新之后
    componentDidUpdate (prevProps, prevState) {
        console.log('组件更新之后:', this.state)
    }

    render () {
        const {post} = this.state
        return (
            <div>
                <li className="item">
                    <div className="title">
                        {
                            this.state.editing ?
                            <form>
                                <textarea
                                    value={post.title}
                                    onChange={this.handleTitleChange}
                                />
                            </form> :
                            post.title
                        }
                    </div>
                    <div>创建人：<span>{post.author}</span></div>
                    <div>创建时间：<span>{post.createTime}</span></div>
                    <div className="like">
                        <span onClick={this.handleVoteClick} role="img" aria-label="👍">👍</span>
                        <span>{post.vote}</span>
                    </div>
                    <div>
                        <button onClick={this.handleEditPost}>
                            {this.state.editing ? '保存' : '编辑'}
                        </button>
                    </div>
                </li>
            </div>
        )
    }
}

// 组件 props 属性类型定义
PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        createTime: PropTypes.string,
        vote: PropTypes.number
    }).isRequired,
    onVote: PropTypes.func.isRequired
}


// PostItem.defaultProps = {
//     subject: {
//         title: "It's so cool."
//     }

// }
export default PostItem;
