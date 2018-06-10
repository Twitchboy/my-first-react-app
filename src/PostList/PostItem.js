import React from 'react';
import PropTypes from 'prop-types'
import './css/postitem.css';

// 类组件
class PostItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            post: props.post,
            name: '',
            password: ''
        }

        // 组件方法
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit (event) {
        event.preventDefault()
    }

    handleChange (event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    // 卸载组件之前
    componentDidUpdate (prevProps, prevState) {
        console.log(this.state)
    }

    render () {
        const {post} = this.state
        return (
            <div>
                <li className="item">
                    <div className="title">{post.title}</div>
                    <div>创建人：<span>{post.author}</span></div>
                    <div>创建时间：<span>{post.createTime}</span></div>
                    <div className="like">
                        <span onClick={this.handleVoteClick} role="img" aria-label="👍">👍</span>
                        <span>{post.vote}</span>
                    </div>
                </li>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                    <input type="submit"/>
                </form>
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
