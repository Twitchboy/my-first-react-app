import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './React16Render/ListComponent';
import StringComponent from './React16Render/StringComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello world！
        </p>
        <ul>
          <ListComponent />
        </ul>
        <p><StringComponent /></p>
      </div>
    );
  }
}

export default App;
