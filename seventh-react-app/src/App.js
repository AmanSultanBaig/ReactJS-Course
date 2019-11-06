import React from 'react';
import './App.css';
// import your external component
import Destructuring from './components/Destructuring-Class-Component'
import MyDestructuring from './components/Destructuring-Functional-Component'

function App() {
  return (
    <div className="App">
      <Destructuring name="Aman Sultan Baig" designation="JS Developer" />
      <MyDestructuring Message=" the web
Destructuring is a concept new to ES2015. Essentially you take the key from an object and store that key in a variable"/>
    </div>
  );
}

export default App;
