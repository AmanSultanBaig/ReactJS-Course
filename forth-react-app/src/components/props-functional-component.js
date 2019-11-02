import React from 'react';
// props are use to pass dynamic data to react component
// props is simply properties 
const FunctionalProps = (props) => {
    return <h1>Hello {props.message}</h1>
}

export default FunctionalProps
