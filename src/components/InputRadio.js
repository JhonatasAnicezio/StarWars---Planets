import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputRadio() {
  const { setInputOrder } = useContext(PlanetsContext);

  const handleClick = ({ target }) => {
    const { value } = target;
    setInputOrder(value);
  };

  return (
    <div>
      <div>
        <input
          value='ascending'
          id='ascending'
          name='order'
          type='radio'
          onClick={ handleClick }
        />
        <label htmlFor='ascending'>Ascendente</label>
      </div>
      <div>
        <input
          value='downward'
          id='downward'
          name='order'
          type='radio'
          onClick={ handleClick }
        />
        <label htmlFor='downward'>Descendente</label>
      </div>
    </div>
  );
}

export default InputRadio;