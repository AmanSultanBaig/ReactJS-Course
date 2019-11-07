import React, { Component } from 'react';
/* I know few methods that how to bind event in ReactJS*/

export default class EventBinding extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello'
        }
        // in methond 3 you need to bind eventhandler here like following
        this.ClickHandler = this.ClickHandler.bind(this);
    }
    // Click handler for button click
    ClickHandler() {
        this.setState({
            message: 'Developers',
        })
    }
    
    // in method 4 you can write your handler
    // with an arrow function format 

    //EXAMPLE:

    // ClickHandler = () => {
    //     this.setState({
    //         message: 'Developers',
    //     })
    // }



    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* this button will occur an error
                when you click on the button,
                Reason: you don't bind existing event to state.
                */}

                {/* <button onClick={this.ClickHandler}>Click ME!</button> */}

                {/* ------------------------------------------------------ */}

                {/* Method=1 */} <button onClick={this.ClickHandler.bind(this)}>Click Method 1!</button>
               {/* Method=2 */} <button onClick={() => this.ClickHandler()}>Click Method 2!</button> 
               {/* Method=3  */} <button onClick={this.ClickHandler}>Click Method 3!</button>

            </div>
        )
    }
}