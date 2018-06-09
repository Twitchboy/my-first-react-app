import React from 'react';
import PropTypes from 'prop-types'
import './css/postitem.css';

// 无状态组件，函数定义
function PostItem (props) {
    const handleVoteClick = () => {
        props.onVote(props.post.id)
    };
    const { post, subject } = props;

    return(
        <li className="item">
            <div className="title">{subject.title}</div>
            <div className="title">{post.title}</div>
            <div>创建人：<span>{post.author}</span></div>
            <div>创建时间：<span>{post.createTime}</span></div>
            <div className="like">
                <span onClick={handleVoteClick} role="img" aria-label="👍">👍</span>
                <span>{post.vote}</span>
            </div>
        </li>
    );
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


PostItem.defaultProps = {
    subject: {
        title: "It's so cool."
    }

}
export default PostItem;
