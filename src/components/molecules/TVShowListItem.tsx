/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {
  ImgWrapper,
  FakeCoverWrapper,
  InfoWrapper,
} from '../atoms/TabelTitleStyled';

import { TVShowListIyemProps } from '../../types/propsTypes';

export default function TVShowListItem({
  posterPath,
  backdropPath,
  firstAirDate,
  genreIds,
  name,
  originCountry,
  originalLanguage,
  originalName,
  overview,
  popularity,
  voteAverage,
  voteCount,
}: TVShowListIyemProps) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {posterPath || backdropPath ? (
          <ImgWrapper
            src={`https://image.tmdb.org/t/p/w500${posterPath || backdropPath}`}
            alt={`${name} poster`}
          />
        ) : (
          <FakeCoverWrapper />
        )}
        <InfoWrapper>
          <strong>{name}</strong>
          <p>{originalName}</p>
          <p>OVERVIEW: {overview?.slice(0, 100)}...</p>
          <p>GENREIDS: {genreIds}</p>
        </InfoWrapper>
      </TableCell>
      <TableCell align="center">
        <p>
          {originCountry[0]}/{originalLanguage}
        </p>
      </TableCell>
      <TableCell align="center">{voteAverage}</TableCell>
      <TableCell align="center">{voteCount}</TableCell>
      <TableCell align="center">{popularity}</TableCell>
      <TableCell align="center">{firstAirDate}</TableCell>
    </TableRow>
  );
}
