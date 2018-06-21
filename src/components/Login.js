import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {post} from '../utils/request';
import url from '../utils/url';
import '../assets/css/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false // 是否重定向到之前的页面
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 处理用户名和密码的变化
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // 提交登录表单
    handleSubmit (e) {
        e.preventDefault(); // 阻止元素表单默认事件
        const username = this.state.username;
        const password = this.state.password;

        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }

        const params = {
            username,
            password
        };

        post(url.login(), params).then(data => {
            if (data.error) {
                alert(data.error.message || "login failed")
            } else {
                // 保存登录信息到 sessionStorage
                sessionStorage.setItem('userId', data.userId);
                sessionStorage.setItem('username', username);
                // 登录成功后，设置 redirectToReferrer 为 true
                this.setState({
                    redirectToReferrer: true
                })
            }
        })
    }

    render () {
        // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向到原来的页面
        const { from } = this.props.location.state || {from: { pathname: "/" }};
        const { redirectToReferrer } = this.state;
        // 登录成功后，redirectTox
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        用户名:
                        <input
                            type="text"
                            placeholder="请输入用户名"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        密码:
                        <input
                            type="password"
                            placeholder="请输入密码"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <input type="submit" value="登录"/>
            </form>
        )
    }
};

export default Login;
