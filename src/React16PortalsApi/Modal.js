import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends Component {
    constructor(props) {
        super(props)

        // 根节点下创建一个div节点，方便我们操作
        this.container = document.createElement('div');
        document.body.appendChild(this.container)
    }

    componentWillUnmount () {
        document.body.removeChild(this.container)
    }

    render () {
        return ReactDOM.createPortal(
            <div className="modal">
                <span className="close" onClick={this.props.onClose}>
                    &times;
                </span>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
            , this.container
        )
    }

}

export default Modal;
