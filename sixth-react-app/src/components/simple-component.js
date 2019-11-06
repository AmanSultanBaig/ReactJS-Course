import React, { Component } from 'react';

class Simple extends Component {
    render() {
        return (
            React.createElement('div', null, React.createElement('h1', null, 'Without JSX'),
            React.createElement('p', null, 'React can write without JSX but its seems Messy!'))
        );
    }
}

export default Simple