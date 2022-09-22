import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, name, func, input }) {

  const handleOnChange = ({ target }) => {
    const { value } = target;
    func({ [input]: value });
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
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Input;