import * as React from 'react';

import { MovieListDataType } from './dataTypes';

export interface LogoProps {
  withText: boolean;
}

export interface UserProfileProps {
  userEmail: string;
}

export interface MovieListItemProps {
  backdropPath: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
}

export interface MovieListSectionProps {
  datas: MovieListDataType[];
  types: 'search' | 'list';
}
export interface CategorySelectProps {
  t: MovieListSectionProps['types'];
}

export interface PopoverBoxProps {
  isOpen: boolean;
  contentText: string;
}
