import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function RenderFilters() {
  const { filter: {
    filterByNumericValues: filterNumeric
  } } = useContext(PlanetsContext);
  return (
    <div>
      <ul>
        { filterNumeric.map((filters, index) => {
          const { column, comparison, value } = filters;
          return (
            <li key={ index }>
              {`${column} ${comparison} ${value}`}
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

export default RenderFilters;