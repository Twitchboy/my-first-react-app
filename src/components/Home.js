import react, {Component} from 'react';

class Home extends Component {
    render () {
        const {match, location} = this.props;
        const {username} = this.state;
        return (
            <div>
                <Header
                    username={username}
                    onLogout={this.handleLogout}
                    location={location}
                />
                {/* 帖子列表路由配置 */}
                <Route
                    path={match.url}
                    exact
                    render={props => <PostList username={username} {...props} />}
                />
                {/* 帖子详情路由 */}
                <Route
                    path={`${match.url}/:id`}
                    render={ props => <Post username={username} {...props} />}
                />
            </div>
        )
    }
}

export default Home;
