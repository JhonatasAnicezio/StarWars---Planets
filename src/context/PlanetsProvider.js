import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import PropTypes from 'prop-types';

function PlanetsProvider({ children }) {
  const [ columnArr, setColumnArr ] = useState(['population',
    'orbital_period', 'diameter','rotation_period', 'surface_water']);
  const [ planets, setPlanets ] = useState([]);
  const [ column, setColumn ] = useState('population');
  const [ comparison, setComparison ] = useState('maior que');
  const [ value, setValue ] = useState(0);
  const [ filter, setFilter ] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(url).then((response) => response.json())
      .then((response) => {
        const { results } = response;
        const { filterByName: { name },
          filterByNumericValues: filterNumeric } = filter;
        results.map((obj) => {
          delete obj.residents;
          return obj;
        });

        const filterName = results.filter((planet) => {
          const str = planet.name.toLowerCase();
          return str.includes(name);
        });

        const filterNumber = filterName.filter((planet) => {
          return filterNumeric.every((filt) => {
            switch (filt.comparison) {
            case 'maior que':
              return planet[filt.column] > filt.value;
            case 'menor que':
              return planet[filt.column] < filt.value;
            case 'igual a':
              return planet[filt.column] == filt.value;
            }
          });
        });

        if(filterNumeric.length == 0) {
          setPlanets(filterName);
        } if(filterNumeric.length > 0) {
          setPlanets(filterNumber);
        }
      });
  }, [filter]);

  const context = {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    planets,
    setFilter,
    filter,
    columnArr,
    setColumnArr
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;