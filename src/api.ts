export interface PlanetProps {
  name: string;
  population: string;
  terrain: string;
}

export interface PersonProps {
  name: string;
  gender: string;
  birth_year: string;
}

export const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');

  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');

  return res.json();
};
