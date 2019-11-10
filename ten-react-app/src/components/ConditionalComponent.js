import React, { Component } from 'react';
// This app is based on rendering JSX via condition
export default class ConditionalComponent extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
        this.ClickMe = this.ClickMe.bind(this)
    }
    // eventHandler for changing state
    ClickMe() {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        // approach 1

        let output;
        if (this.state.isLoggedIn) {
            output = <div>You are LoggedIn</div>
        } else {
            output = <div>Login Please!</div>
        }

        return (
            <div>
                <div>{output}</div>
                <button onClick={this.ClickMe}>Login</button>
            </div>
        )

        // approach 2

            if (this.state.isLoggedIn) {
                return <div>You are LoggedIn</div>
            } else {
                return <div>Login Please!</div>
            }

        // approach 3

           return (this.state.isLoggedIn) ? <div>Your are LoggedIn</div> 
            : <div>Login Please!</div>
    }
}