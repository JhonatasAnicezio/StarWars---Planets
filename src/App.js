import React from 'react';
import Table from './components/Table';
import Title from './components/Title';
import './App.css';

function App() {
  return (
    <div>
      <Title title={ 'StarWars-Planets' } />
      <Table />
    </div>
  );
}

export default App;
