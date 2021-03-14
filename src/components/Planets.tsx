import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {fetchPlanets, PlanetProps} from '../api';
import Planet from './Planet';

interface PlanetsData {
  results: PlanetProps[];
  previous?: string;
  next?: string;
}

const Planets: React.FC = () => {
  const [page, setPage] = useState(1);
  const {data, status} = useQuery<PlanetsData>(['planets', page], () =>
    fetchPlanets(page)
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <>
          <button
            onClick={() => setPage((cur) => Math.max(cur - 1, 1))}
            disabled={page === 1}>
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) => (!data || !data.next ? old : old + 1))
            }
            disabled={!data || !data.next}>
            Next page
          </button>
          <div>
            {data!.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
