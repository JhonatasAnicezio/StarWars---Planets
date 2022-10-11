import React, { useContext } from 'react';
import Input from './Input.js';
import './Header.css';
import ListFilters from './ListFilters.js';
import PlanetsContext from '../context/PlanetsContext.js';
import RenderFilters from './RenderFilters.js';

function Header() {
  const { setFilter, filter } = useContext(PlanetsContext);
  const { filterByName } = filter;

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
          value={ filterByName.name }
          name='filterName'
          func={ inputName }
        />
      </div>
      <ListFilters />
      <RenderFilters />
    </header>
  );
}

export default Header;