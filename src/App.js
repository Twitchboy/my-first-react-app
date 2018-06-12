import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './React16Render/ListComponent';
import StringComponent from './React16Render/StringComponent';
import ErrorBoundary from './React16ErrorHandler/ErrorBoundary';
import { Profile } from './React16ErrorHandler/Profile';
import Modal from './React16PortalsApi/Modal'
import CustomDom from './React16CustomDom/CustomDom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {name: 'Junting'},
      showModal: true
    }
    this.handleError = this.handleError.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleError (event) {
    this.setState({
      user: null
    })
  }

  closeModal (event) {
    this.setState({
      showModal: false
    })
  }

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

        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.handleError}>点击</button>

        {
          this.state.showModal && (
            <Modal onClose={this.closeModal}>
              Modal Dialog~
            </Modal>
          )
        }

        <p>自定义DOM属性</p>
        <CustomDom />
      </div>
    );
  }
}

export default App;
