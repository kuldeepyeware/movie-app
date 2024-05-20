export interface Movies {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: string;
  media_type: string;
  name: string;
  title: string;
  release_date: Date;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Director extends Crew {}

export interface Writer extends Crew {}

export interface CastType extends Crew {
  cast_id: number;
  character: string;
  order: number;
}
