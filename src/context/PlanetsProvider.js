import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {

  const [ data, setData ] = useState([]);
  const [ filterByName, setFilterByName ] = useState({
    name:''
  });

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
        setData(results.filter((result) => {
          const { name } = filterByName;
          const str = result.name.toLowerCase();
          return str.includes(name);
        }));
      });
  }, [filterByName]);

  const context = {
    data,
    setData,
    filterByName,
    setFilterByName,
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