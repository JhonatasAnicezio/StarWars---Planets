import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import PropTypes from 'prop-types';

function PlanetsProvider({ children }) {
  const [ planets, setPlanets ] = useState([]);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(url).then((response) => response.json())
      .then((response) => {
        const { results } = response;
        results.map((obj) => {
          delete obj.residents;
          return obj;
        });
        setPlanets(results);
      });
  }, []);

  const context = {
    planets,
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