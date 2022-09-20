import { useState, useEffect } from 'react';

function usePlanets() {
  const { listPlanets, setListPlanets } = useState([]);

  useEffect(() => {
    const fetchPlanets = () => {
      const { result } = fetch('https://swapi-trybe.herokuapp.com/api/planets/').
        then((response) => response.json());
      setListPlanets(result);
    };
    fetchPlanets();
  }, []);

  return listPlanets;
}

export default usePlanets;