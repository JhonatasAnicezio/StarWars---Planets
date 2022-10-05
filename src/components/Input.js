import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Input.css';

function Input() {
  const { setFilter } = useContext(PlanetsContext);

  return (
    <input
      className='input-Name'
      type='text'
      name='filterName'
      id='filterName'
      onChange={ ({ target }) =>
        setFilter({ filterByName: {
          name: target.value.toLowerCase(),
        } })
      }
    />
  );
}

export default Input;