import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import './ListFilters.css';

function ListFilters() {
  const { setColumn, setComparison, setValue,
    value, columnArr } = useContext(PlanetsContext);
  const operatorArr = [ 'maior que', 'menor que', 'igual a'];

  return (
    <div className='container-filter'>
      <Select
        text='Coluna'
        name='column'
        options={ columnArr }
        func={ setColumn }
      />
      <Select
        text='Operador'
        name='operator'
        options={ operatorArr }
        func={ setComparison }
      />
      <Input
        className='input-Number'
        type='number'
        value={ value }
        name='filterNumber'
        func={ setValue }
      />
      <Button />
    </div>
  );
}

export default ListFilters;