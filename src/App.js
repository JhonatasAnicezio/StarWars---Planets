import React from 'react';
import Table from './components/Table';
import Title from './components/Title';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Title title={ 'StarWars-Planets' } />
      <Input />
      <Table />
    </div>
  );
}

export default App;
