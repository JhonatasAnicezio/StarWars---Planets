import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title({ title }) {
  return (
    <div className='container-title'>
      <h1>{ title }</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;