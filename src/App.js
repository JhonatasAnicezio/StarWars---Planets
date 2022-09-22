import React, { useContext } from 'react';
import Table from './components/Table';
import Title from './components/Title';
import './App.css';
import Input from './components/Input';
import PlanetsContext from './context/PlanetsContext';

function App() {
  const { setFilterByName } = useContext(PlanetsContext);
  return (
    <div>
      <Title title={ 'StarWars-Planets' } />
      <Input
        text='Procure por um planeta'
        type='text'
        name='search-name'
        func={ setFilterByName }
        input='name'
      />
      <Table />
    </div>
  );
}

export default App;
