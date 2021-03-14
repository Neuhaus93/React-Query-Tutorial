import React from 'react';
import {useQuery} from 'react-query';
import {fetchPeople, PersonProps} from '../api';
import Person from './Person';

interface PeopleData {
  results: PersonProps[];
}

const People: React.FC = () => {
  const {data, isLoading, error} = useQuery<PeopleData>('people', fetchPeople, {
    staleTime: 3000,
  });

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  if (error) {
    return <div>'An error has occurred.'</div>;
  }

  return (
    <div>
      <h2>People</h2>
      <div>
        {data!.results.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default People;
