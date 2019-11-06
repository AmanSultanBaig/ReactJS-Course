import React, { Component } from 'react';

class Destructuring extends Component {
    render() {
        const {name , designation} = this.props;    // this is call destructuring
        return (
            <div>
                <h1>My Name is {name} & By Profession I'm a {designation}</h1>
            </div>
        );
    }
}

// Note: destructuring is nothing, its just a
// concept of assigning all props on one place 
// which will helpful to write elegent code and 
// don't need to use '"props"' keyword all the time

export default Destructuring