export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episodes: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  prev: string | null;
  next: string;
}

export interface CharactersResponse {
  info: Info;
  results: Character[];
}
