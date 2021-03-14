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

export const fetchPlanets = async (page: number) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);

  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');

  return res.json();
};
