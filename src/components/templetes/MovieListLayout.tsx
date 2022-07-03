import * as React from 'react';

import MovieListSection from '../organisms/MovieListSection';
import { MovieListLayoutProps } from '../../types/propsTypes';

export default function MovieListLayout({ datas }: MovieListLayoutProps) {
  return <MovieListSection datas={datas} types="list" />;
}
