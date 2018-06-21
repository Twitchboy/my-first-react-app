import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/posts" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
