/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  ImgWrapper,
  FakeCoverWrapper,
  InfoWrapper,
} from '../atoms/TabelTitleStyled';

import { MovieListItemProps } from '../../types/propsTypes';

const switchTableRow = (
  type: MovieListItemProps['type'],
  props: Exclude<MovieListItemProps, 'type'>,
) => {
  switch (type) {
    case 'list':
      return (
        <>
          <TableCell
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <ImgWrapper
              src={`https://image.tmdb.org/t/p/w500${props.backdropPath}`}
              alt={`${props.title} poster`}
            />
            <strong>{props.title}</strong>
          </TableCell>
          <TableCell>{props.voteAverage}</TableCell>
          <TableCell>{props.voteCount}</TableCell>
          <TableCell>{props.releaseDate}</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>
            <MoreVertIcon />
          </TableCell>
        </>
      );

    default:
      return (
        <>
          <TableCell
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {props.posterPath || props.backdropPath ? (
              <ImgWrapper
                src={`https://image.tmdb.org/t/p/w500${
                  props.posterPath || props.backdropPath
                }`}
                alt={`${props.title} poster`}
              />
            ) : (
              <FakeCoverWrapper />
            )}
            <InfoWrapper>
              <strong>{props.title}</strong>
              <p>{props.originalTitle}</p>
              <p>overview: {props.overview?.slice(0, 100)}...</p>
            </InfoWrapper>
          </TableCell>
          <TableCell align="center">{props.originalLanguage}</TableCell>
          <TableCell align="center">{props.voteAverage}</TableCell>
          <TableCell align="center">{props.voteCount}</TableCell>
          <TableCell align="center">{props.popularity}</TableCell>
          <TableCell align="center">{props.releaseDate}</TableCell>
        </>
      );
  }
};

export default function MovieListItem(props: MovieListItemProps) {
  const { type } = props;
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {switchTableRow(type, props)}
    </TableRow>
  );
}
