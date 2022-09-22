import React from 'react';
import PropTypes from 'prop-types';

function Select({ text, name, func, value, options }) {

  const handleOnChange = ({ target }) => {
    const { value } = target;
    func( value );
  };

  return (
    <div>
      <label>{ text }</label>
      <select name={ name } id={ value } onChange={ handleOnChange }>
        {options.map((opt, index) =>
          <option
            name={ opt }
            key={ index }
          >
            {opt}
          </option> 
        )}
      </select>
    </div>
  );
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
