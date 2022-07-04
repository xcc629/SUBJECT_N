import * as React from 'react';
import { useCallback, useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

import MovieListItem from '../molecules/MovieListItem';

import { MovieListSectionProps } from '../../types/propsTypes';
import { MovieListDataType } from '../../types/dataTypes';

const swichTableHead = (type: MovieListSectionProps['types']) => {
  switch (type) {
    case 'list':
      return (
        <TableRow>
          <TableCell sx={{ color: 'primary.100' }}>Title</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>vote_average</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>vote_count</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>release_date</TableCell>
          <TableCell />
        </TableRow>
      );
    default:
      return (
        <TableRow>
          <TableCell sx={{ color: 'primary.100' }}>Title</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>language</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>vote_average</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>vote_count</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>popularity</TableCell>
          <TableCell sx={{ color: 'primary.100' }}>release_date</TableCell>
        </TableRow>
      );
  }
};

const swichTableBody = (
  type: MovieListSectionProps['types'],
  data: MovieListDataType,
) => {
  switch (type) {
    case 'list':
      return (
        <MovieListItem
          key={data.id}
          type={type}
          backdropPath={data.backdrop_path}
          title={data.title}
          voteAverage={data.vote_average}
          voteCount={data.vote_count}
          releaseDate={data.release_date}
        />
      );
    default:
      return (
        <MovieListItem
          type={type}
          key={data.id}
          backdropPath={data.backdrop_path}
          title={data.title}
          voteAverage={data.vote_average}
          voteCount={data.vote_count}
          releaseDate={data.release_date}
          adult={data.adult}
          genreIds={data.genre_ids}
          originalLanguage={data.original_language}
          originalTitle={data.original_title}
          overview={data.overview}
          popularity={data.popularity}
          posterPath={data.poster_path}
        />
      );
  }
};

export default function MovieListSection({
  datas,
  types,
}: MovieListSectionProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [],
  );

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: '1122px', m: '20px auto' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="movie table">
        <TableHead>{swichTableHead(types)}</TableHead>
        <TableBody>
          {datas
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data) => {
              return swichTableBody(types, data);
            })}
        </TableBody>
        <TableFooter
          sx={{
            height: '100px',
          }}
        >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 8, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={datas.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
