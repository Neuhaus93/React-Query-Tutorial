import {PersonProps} from '../api';

interface Props {
  person: PersonProps;
}

const Person: React.FC<Props> = ({person}) => {
  return (
    <div className='card'>
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Gender - {person.birth_year}</p>
    </div>
  );
};

export default Person;
