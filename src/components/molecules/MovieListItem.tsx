import * as React from 'react';
import styled from '@emotion/styled';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { MovieListItemProps } from '../../types/propsTypes';

const ImgWrapper = styled.img`
  width: 100px;
  height: 52.2px;
  object-fit: cover;
`;

export default function MovieList({
  id,
  backdropPath,
  title,
  voteAverage,
  voteCount,
  releaseDate,
}: MovieListItemProps) {
  return (
    <TableRow key={id}>
      <TableCell sx={{ width: '100px', height: '52.2px' }}>
        <ImgWrapper
          src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
          alt={`${title} poster`}
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{voteAverage}</TableCell>
      <TableCell>{voteCount}</TableCell>
      <TableCell>{releaseDate}</TableCell>
    </TableRow>
  );
}
