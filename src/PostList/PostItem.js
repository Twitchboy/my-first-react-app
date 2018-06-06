import React from 'react';

// 无状态组件，函数定义
function PostItem (props) {
    const handleVoteClick = () => {
        props.onVote(props.post.id)
    };
    const { post } = props;

    return(
        <li>
            <div>{post.title}</div>
            <div>创建人：<span>{post.author}</span></div>
            <div>创建时间：<span>{post.createTime}</span></div>
            <div>
                <button
                    onClick={handleVoteClick}
                >
                    点赞<span role="img" aria-label="👍">👍</span>
                </button>
                &nbsp;<span>{post.vote}</span>
            </div>
        </li>
    );
}

export default PostItem;
