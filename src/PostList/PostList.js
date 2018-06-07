import React, { Component } from 'react';
import PostItem from './PostItem';
import './css/postlist.css';

class PostList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            posts: []
        };

        this.timer = null;  // 定时器
        this.handleVote = this.handleVote.bind(this); // React.js 查看为什么需要手动绑定 this
    }

    // 组件还没挂载时
    componentDidMount () {
        // 用setTimeout 模拟异步从服务器端获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    { id: 1, title: '我不是一个前端', author: 'Junting', create_time: '2018-06-01 10:20', vote: 0 },
                    { id: 2, title: '前端框架，最爱React', author: 'Junting', create_time: '2018-06-02 10:30', vote: 0 },
                    { id: 3, title: 'Web App 时代已经到来', author: 'Junting', create_time: '2018-06-03 10:40', vote: 0 },
                    { id: 4, title: 'IOC,割韭菜', author: 'Junting', create_time: '2018-06-04 10:50', vote: 0 }
                ]
            })
        }, 1000);
    }

    // 组件将卸载
    componentWillUnmount () {
        if (this.timer) {
            clearTimeout(this.timer) // 消除定时器
        }
    }

    // 点赞事件
    handleVote (id) {
        // 根据帖子传递过来的 id 进行过滤，找到待修改 vote 属性的帖子，返回新的 posts 对象
        const posts = this.state.posts.map(item => {
            // 对象解构，赋予新值
            const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
            return newItem;
        });

        this.setState({
            posts
        });
    }

    render () {
        return (
            <div className='container'>
                <h2>话题列表</h2>
                <ul>
                    {this.state.posts.map((item) =>
                        <PostItem
                           post = {item}
                           key={item.title}
                           onVote = {this.handleVote}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostList;
