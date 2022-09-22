import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { setFilterByName } = useContext(PlanetsContext);

  const handleOnChange = ({ target }) => {
    const { value } = target;
    setFilterByName({ name: value });
  };

  return (
    <div>
      <label htmlFor='search-name'>
        Procure por um planeta
      </label>
      <input
        type='text'
        id='search-name'
        name='search-name'
        onChange={ handleOnChange }
      />
    </div>
  );
}

export default Input;