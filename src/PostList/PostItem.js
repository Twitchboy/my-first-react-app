import React, { Component } from 'react';

class PostItem extends Component {

    constructor (props) {
        super(props);

        // 给组件 UI 初始化一个状态
        this.state = {
            vote: 0
        };
    }
    // 处理点赞事件，更新点赞次数状态
    handVoteClick () {
        let vote = this.state.vote;
        vote++;
        this.setState(
            {
                vote: vote
            }
        )
    }

    render() {
        const {title, author, createTime} = this.props;
        return(
            <li>
                <div>{title}</div>
                <div>创建人：<span>{author}</span></div>
                <div>创建时间：<span>{createTime}</span></div>
                <div>
                    <button
                        onClick={ () => {this.handVoteClick();} }
                    >
                        点赞<span role="img" aria-label="👍">👍</span>
                    </button>
                    &nbsp;<span>{this.state.vote}</span>
                </div>
            </li>
        );
    }
}

export default PostItem;
