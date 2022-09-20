import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {

  const { data } = useContext(PlanetsContext);

  return (
    <table>
      <tbody>
        { data.map((planet, index) => {
          const keys = Object.values(planet);
          return (
            <tr key={ index }>
              { keys.map((key, index) =>
                <td key={ index }>
                  { key }
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