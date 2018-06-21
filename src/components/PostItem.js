import React, {Component} from 'react';
import {getFormatDate} from '../utils/date';
import '../assets/css/postItem.css';

class PostItem extends Component {
    render () {
        const {post} = this.props;

        return(
            <li className="postItem">
                <div className="title">{post.title}</div>
                <div>
                    创建人： <span>{post.author.username}</span>
                </div>
                <div>
                    更新时间：<span>{getFormatDate(post.updatedAt)}</span>
                </div>
                <div className="like">
                    <span role="img" aria-label="👍">👍</span>
                    <span>{post.vote}</span>
                </div>
            </li>
        );
    }
};

export default PostItem;
