import { useState } from 'react';

export function useFilters(data) {
  const [ number, setNumber ] = useState({
    number:''
  });
  const [ type, setType ] = useState('population');
  const [ condition, setCondition ] = useState('maior que');
  
  const filterNumber = data.filter((planet) => {
    if ( number.number === '' ) {
      return planet;
    }
    switch(condition) {
    case 'maior que':
      return planet[type] > number.number;
    case 'menor que':
      return planet[type] < number.number;
    case 'igual a':
      return planet[type] === number.number;
    }
  });

  return { setNumber, setType, setCondition, filterNumber};
}