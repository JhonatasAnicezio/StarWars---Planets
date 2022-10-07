import React, { useContext } from 'react';
import Input from './Input.js';
import './Header.css';
import PlanetsContext from '../context/PlanetsContext.js';

function Header() {
  const { setFilter, filter } = useContext(PlanetsContext);

  const inputName = ( value ) => {
    setFilter({ 
      ...filter,
      filterByName: {
        name: value,
      }
    });
  };

  return (
    <header>
      <div className='container-title'>
        <h1>Projeto Star Wars - Trybe</h1>
        <Input
          className='input-Name'
          type='text'
          name='filterName'
          func={ inputName }
        />
      </div>
    </header>
  );
}

export default Header;