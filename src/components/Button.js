import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Button.css';

function Button() {
  const { column, comparison, value, setFilter, filter } = useContext(PlanetsContext);

  function addFilters() {
    setFilter({
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        {
          column: column,
          comparison: comparison,
          value: value,
        }
      ]
    });
  }

  return (
    <button
      className='main-button'
      type='button'
      onClick={ addFilters }
    >
      FILTRAR
    </button>
  );
}

export default Button;