import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PostList from './PostList/PostList';

ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
