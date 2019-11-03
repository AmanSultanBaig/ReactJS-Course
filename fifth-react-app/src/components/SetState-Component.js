import React, { Component } from 'react';

export class SetState extends Component {
    constructor() {
        super();
        // initializing state 
        this.state = {
            count: 0
        }
    }

    clickMe() {
        // updaing state
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.clickMe()}>Click ME</button>
            </div>
        )
    }
}
