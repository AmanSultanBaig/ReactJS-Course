import React from 'react';

export default function ChildComponent(props) {
    return(
        <div>
            {/* get props method from parent & used */}
            <button onClick={(ChildName) => props.eventHandler('Child Component')}>Click From Child</button>
            {/* passed an argument from child to parent */}
        </div>
    );
}