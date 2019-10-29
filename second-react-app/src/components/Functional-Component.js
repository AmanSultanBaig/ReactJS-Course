import React from 'react';

// traditional function in JS 
function SayWelcome() {
    return <h1>Welcome From Functional Component!</h1>
}

// traditional ES6 arrow function in JS 
const SayWelcomeTwo = () => {
    return <h1>Welcome From Functional Component! (ES6 Function)</h1>
}

// exporting multi functions/components
export { SayWelcome, SayWelcomeTwo }
