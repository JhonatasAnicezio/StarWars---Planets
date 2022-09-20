import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {

  const { data } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          { data.length && Object.keys(data[0])
            .map((keyName, index) =>
              <th key={ index }>
                { keyName }
              </th>
            )}
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index) => {
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
  );
}

export default Table;