import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import AsyncComponent from './AsyncComponent';
import './App.css';

// 动态加载组件
const AsyncHome = AsyncComponent(() => import('./components/Home'));
const AsyncLogin = AsyncComponent(() => import('./components/Login'));

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AsyncHome}/>
          <Route path="/login" component={AsyncLogin}/>
          <Route path="/posts" component={AsyncHome}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
