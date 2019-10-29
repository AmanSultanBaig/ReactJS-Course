import React from 'react';
import './App.css';
import { SayWelcome, SayWelcomeTwo } from './components/Functional-Component';

function App() {
  return (
    <div className="App">
      <SayWelcome />
      <SayWelcomeTwo />
    </div>
  );
}

export default App;
