import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './RenderFilters.css';

function RenderFilters() {

  const { filter: {
    filterByNumericValues: filterNumeric
  }, setFilter, filter } = useContext(PlanetsContext);

  const removeFilter = (parameter) => {
    const newArray = filterNumeric;
    newArray.splice(filterNumeric.indexOf(parameter), 1);
    setFilter({
      ...filter,
      filterByNumericValues: newArray,
    });
  };

  return (
    <div className='container-renderFilters'>
      <ul className='ul-filters'>
        { filterNumeric.map((filter, index) => {
          const { column, comparison, value } = filter;
          return (
            <li key={ index } className='li-filters'>
              {`${column} ${comparison} ${value}`}
              <button
                className='button-filters'
                type='button'
                onClick={ () => removeFilter(filter)}
              >
                X
              </button>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

export default RenderFilters;