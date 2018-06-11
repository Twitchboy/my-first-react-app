import React, { Component } from 'react';

class ListComponent extends Component {

    render () {
        return [
            <li key="a">React</li>,
            <li key="b">Vue</li>,
            <li key="c">AngularJS</li>
        ]
    }
}

export default ListComponent
