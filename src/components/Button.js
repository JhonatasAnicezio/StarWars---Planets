import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Button.css';

function Button() {
  const { column, comparison, value, setFilter,
    filter, columnArr, setColumn } = useContext(PlanetsContext);
  const [ disabled, setDisabled ] = useState(false);

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

    const indice = columnArr.indexOf(column);
    columnArr.splice(indice, 1);
    setColumn(columnArr[0]);
  }

  useEffect(() => {
    if (columnArr.length == 0) {
      setDisabled(true);
    } if (columnArr.length > 0) {
      setDisabled(false);
    }
  });

  return (
    <button
      className='main-button'
      type='button'
      onClick={ addFilters }
      disabled={ disabled }
    >
      FILTRAR
    </button>
  );
}

export default Button;