import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import CounterDisplay from './Components/Counter/CounterDisplay';

function App() {
  return (
    <div className="App">
     <Counter />
     <CounterDisplay />
    </div>
  );
}

export default App;
