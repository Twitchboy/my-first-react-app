import React, { Component } from 'react';
import PostItem from './PostItem';

const data = [
    { title: '大家一起来讨论React吧', author: 'Junting', create_time: '2018-06-01 10:20' },
    { title: '前端框架，最爱React', author: 'Junting', create_time: '2018-06-02 10:30' },
    { title: 'Web App 时代已经到来', author: 'Junting', create_time: '2018-06-03 10:40' },
    { title: 'IOC,割韭菜', author: 'Junting', create_time: '2018-06-04 10:50' }
];

class PostList extends Component {
    render () {
        return (
            <div>
                帖子列表：
                <ul>
                    {data.map((item) =>
                        <PostItem
                            key={item.title}
                            title= {item.title}
                            author= {item.author}
                            createTime={item.create_time}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostList;
