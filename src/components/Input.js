import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, name, func }) {

  const handleOnChange = ({ target }) => {
    const { value } = target;
    func({ name: value });
  };

  return (
    <div>
      <label htmlFor={ name }>
        { text }
      </label>
      <input
        type={ type }
        id={ name }
        name={ name }
        onChange={ handleOnChange }
      />
    </div>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;