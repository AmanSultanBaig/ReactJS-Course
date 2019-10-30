import React, { Component } from 'react';

// Note: in react your functional / class component's name must
// start with capital letter otherwise react will occurs an error
class MyComponents extends Component {
    render() {
      return <h1>Hello from, {this.props.value}</h1>;
    }
  }
  
export default MyComponents
