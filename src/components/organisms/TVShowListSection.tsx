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

import TVShowListItem from '../molecules/TVShowListItem';

import { TVShowListSectionProps } from '../../types/propsTypes';

export default function TVShowListSection({ datas }: TVShowListSectionProps) {
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
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'primary.100' }}>Name</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>
              country/language
            </TableCell>
            <TableCell sx={{ color: 'primary.100' }}>vote_average</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>vote_count</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>popularity</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>first_air_date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data) => {
              return (
                <TVShowListItem
                  key={data.id}
                  posterPath={data.poster_path}
                  popularity={data.popularity}
                  overview={data.overview}
                  backdropPath={data.backdrop_path}
                  voteAverage={data.vote_average}
                  firstAirDate={data.first_air_date}
                  originCountry={data.origin_country}
                  genreIds={data.genre_ids}
                  originalLanguage={data.original_language}
                  voteCount={data.vote_count}
                  name={data.name}
                  originalName={data.original_name}
                />
              );
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
