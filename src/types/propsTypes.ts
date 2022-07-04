import * as React from 'react';

import {
  MovieListDataType,
  PeopleSearchDataType,
  TVshowDataType,
} from './dataTypes';

import { BaseLayoutProps } from './baseProps';

export interface LogoProps extends BaseLayoutProps {
  withText: boolean;
}

export interface UserProfileProps extends BaseLayoutProps {
  userEmail: string;
}

export interface SearchBarProps extends BaseLayoutProps {
  category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  onSubmitForm: (e: React.FormEvent) => void;
}

export interface MovieListItemProps extends BaseLayoutProps {
  type: 'search_movie' | 'list' | 'search_people';
  backdropPath: MovieListDataType['backdrop_path'];
  title: MovieListDataType['title'];
  voteAverage: MovieListDataType['vote_average'];
  voteCount: MovieListDataType['vote_count'];
  releaseDate: MovieListDataType['release_date'];
  // optional
  posterPath?: MovieListDataType['poster_path'];
  adult?: MovieListDataType['adult'];
  overview?: MovieListDataType['overview'];
  originalTitle?: MovieListDataType['original_title'];
  genreIds?: MovieListDataType['genre_ids'];
  mediaType?: MovieListDataType['media_type'];
  originalLanguage?: MovieListDataType['original_language'];
  popularity?: MovieListDataType['popularity'];
  video?: MovieListDataType['video'];
}

export interface TVShowListIyemProps extends BaseLayoutProps {
  posterPath: TVshowDataType['poster_path'];
  popularity: TVshowDataType['popularity'];
  overview: TVshowDataType['overview'];
  backdropPath: TVshowDataType['backdrop_path'];
  voteAverage: TVshowDataType['vote_average'];
  firstAirDate: TVshowDataType['first_air_date'];
  originCountry: TVshowDataType['origin_country'];
  genreIds: TVshowDataType['genre_ids'];
  originalLanguage: TVshowDataType['original_language'];
  voteCount: TVshowDataType['vote_count'];
  name: TVshowDataType['name'];
  originalName: TVshowDataType['original_name'];
}

export interface PersonListItemProps extends BaseLayoutProps {
  profilePath: PeopleSearchDataType['profile_path'];
  name: PeopleSearchDataType['name'];
  department: PeopleSearchDataType['known_for_department'];
}

export interface MovieListSectionProps extends BaseLayoutProps {
  datas: MovieListDataType[];
  types: 'search_movie' | 'list' | 'search_people';
}

export interface MovieListLayoutProps extends BaseLayoutProps {
  datas: MovieListDataType[];
}

export interface TVShowListSectionProps extends BaseLayoutProps {
  datas: TVshowDataType[];
}

export interface PersonListSectionProps extends BaseLayoutProps {
  datas: PeopleSearchDataType[];
}
