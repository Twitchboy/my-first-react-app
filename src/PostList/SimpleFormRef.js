import React, { Component } from 'react'

class SimpleFormRef extends Component {
    constructor (props) {
        super(props);
        this.state = ({
            defaultValue: '默认值'
        })
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
        console.log('输出值', this.input.value);
        event.preventDefault();
    }

    render () {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        非受控组件，使用ref：
                        {/*  */}
                        <input defaultValue={this.state.defaultValue} ref={input => this.input = input}/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SimpleFormRef;
