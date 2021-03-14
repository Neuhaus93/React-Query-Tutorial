import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {fetchPlanets, PlanetProps} from '../api';
import Planet from './Planet';

interface PlanetsData {
  results: PlanetProps[];
}

const Planets: React.FC = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const {data, status} = useQuery<PlanetsData>(['planets', page], () =>
    fetchPlanets(page)
  );

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

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
