import React from 'react';
import {useQuery} from 'react-query';
import {fetchPlanets, PlanetProps} from '../api';
import Planet from './Planet';

interface PlanetsData {
  results: PlanetProps[];
}

const Planets: React.FC = () => {
  const {data, status} = useQuery<PlanetsData>('planets', fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{status}</p> */}

      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data!.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
