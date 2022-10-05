import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { setFilter } = useContext(PlanetsContext);

  return (
    <input
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