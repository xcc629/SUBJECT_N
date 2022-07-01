import * as React from 'react';
import styled from '@emotion/styled';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MovieListItemProps } from '../../types/propsTypes';

const ImgWrapper = styled.img`
  width: 100px;
  height: 52.2px;
  margin-right: 10px;
  object-fit: cover;
`;

export default function MovieListItem({
  backdropPath,
  title,
  voteAverage,
  voteCount,
  releaseDate,
}: MovieListItemProps) {
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
        <ImgWrapper
          src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
          alt={`${title} poster`}
        />
        {title}
      </TableCell>
      <TableCell>{voteAverage}</TableCell>
      <TableCell>{voteCount}</TableCell>
      <TableCell>{releaseDate}</TableCell>
      <TableCell sx={{ color: 'primary.100' }}>
        <MoreVertIcon />
      </TableCell>
    </TableRow>
  );
}
