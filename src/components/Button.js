import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

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
    console.log(filter);
  }

  return (
    <button
      type='button'
      onClick={ addFilters }
    >
      Filtrar
    </button>
  );
}

export default Button;