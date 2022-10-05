import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);
  return (
    <div className='container-Table'>
      <table>
        <thead>
          <tr>
            { planets.length && Object.keys(planets[0])
              .map((keyName, index) =>
                <th key={ index }>
                  { keyName.toUpperCase() }
                </th>
              )}
          </tr>
        </thead>
        <tbody>
          { planets.map((planet, index) => {
            const values = Object.values(planet);
            return (
              <tr key={ index }>
                { values.map((value, index) =>
                  <td key={ index }>
                    { value }
                  </td>
                ) }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;