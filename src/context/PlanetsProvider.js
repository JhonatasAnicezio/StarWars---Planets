import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const { results } = response;
        results.map((obj) => {
          delete obj.residents;
          return obj;
        });
        setData(results);
      });
  }, []);

  const context = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;