import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <div>
      <h1>{ title }</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;