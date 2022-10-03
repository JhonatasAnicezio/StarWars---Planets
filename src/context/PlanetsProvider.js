import React from 'react';
import PlanetsContext from './PlanetsContext';
import PropTypes from 'prop-types';

function PlanetsProvider(children) {

  const context = {};

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