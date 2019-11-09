import React, { Component } from 'react';
// import Child to Parent
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            Parent: 'This Parent Component'
        }
    }

    clickHander(ChildName) {
        alert(`Hello ${this.state.Parent} & This is ${ChildName}`);
    }

    render() {
        return (
            <div>
                {/* passed eventHandler as [props as Method] */}
                <ChildComponent eventHandler={this.clickHander.bind(this)} />
            </div>
        );
    }
}