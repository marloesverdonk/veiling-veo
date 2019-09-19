import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer'
import AddItemFormContainer from './components/AddItemFormContainer'
import DeleteItemFormContainer from './components/DeleteItemFormContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ItemListContainer/>
      <ItemDetailsContainer/>
      <AddItemFormContainer/>
      <DeleteItemFormContainer/>
    </div>
  );
}

export default App;
