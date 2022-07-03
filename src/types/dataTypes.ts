export interface MoviDataType {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface TVshowDataType {
  poster_path: string | null;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface MovieListDataType extends MoviDataType {}

export interface MovieSearchDataType
  extends Exclude<MoviDataType, 'media_type'> {}

export interface TVShowSearchDataType
  extends Exclude<TVshowDataType, 'media_type'> {}

export interface PeopleSearchDataType {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: MoviDataType | TVshowDataType;
}
