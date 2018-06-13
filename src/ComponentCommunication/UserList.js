import React, {Component} from 'react';

class UserListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { users }  = this.props;
        return(
            <div>
                <ul className="user-list">
                    {
                        users.map(user => {
                            return (
                                <li key={user.id}>
                                    <span>{user.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default UserListContainer;
