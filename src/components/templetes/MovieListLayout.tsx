import * as React from 'react';
import { MovieListLayoutProps } from '../../types/propsTypes';
import MovieListSection from '../organisms/MovieListSection';

export default function MovieListLayout({ datas }: MovieListLayoutProps) {
  return <MovieListSection datas={datas} types="list" />;
}
