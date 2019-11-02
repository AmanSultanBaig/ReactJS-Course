import React from 'react';
import './App.css';
// ClassComponent
import  ClassProps  from './components/props-class-component';
// FunctionalComponent
import FunctionalProps from './components/props-functional-component';

function App() {
  return (
    <div className="App">
     <ClassProps message="From Class Component"/>
     <FunctionalProps message="From Functional Component"/>
    </div>
  );
}

export default App;
