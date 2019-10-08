import React from 'react';
import './App.css';
import List from "./Components/List"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List:
      </header>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
