import React, { Component } from 'react';
//  in class Component props use with 'this' keyword 
class ClassProps extends Component {
    render(){
        return(
            <h1>Hello {this.props.message}</h1>
        )
    }
}

export default ClassProps