import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ItemListContainer/>
      <ItemDetailsContainer/>
    </div>
  );
}

export default App;
