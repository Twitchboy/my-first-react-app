import React, {Component} from 'react';
import UserList from './UserList';

class UserListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // 组件挂载到 DOM 后调/用
    componentDidMount () {
        const that = this;
        fetch('path/to/user-api/').then(function (response) {
            response.json().then(function (data) {
                that.setState({users: data})
            })
        })
    }

    render () {
        return(
            <div>
                <UserList users={this.state.users}/>
            </div>
        );
    }
}

export default UserListContainer;
