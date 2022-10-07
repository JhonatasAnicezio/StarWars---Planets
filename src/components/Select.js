import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

function Select({ text, name, options, func }) {

  const handleOnChange = ({ target }) => {
    const { value } = target;
    func(value);
  };

  return (
    <div className='container-select'>
      <label>{ text }</label>
      <select name={ name } id={ name } onChange={ handleOnChange }>
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
};

export default Select;