import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import PropTypes from 'prop-types';

function PlanetsProvider({ children }) {
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
        const { name } = filter.filterByName;
        results.map((obj) => {
          delete obj.residents;
          return obj;
        });
        setPlanets(results.filter((planet) => {
          const str = planet.name.toLowerCase();
          return str.includes(name);
        } ));
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