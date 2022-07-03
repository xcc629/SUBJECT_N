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

import SearchBar from '../molecules/SearchBar';
import MovieListItem from '../molecules/MovieListItem';
import { MovieListSectionProps } from '../../types/propsTypes';

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
      {types === 'search' && <SearchBar />}
      <Table sx={{ minWidth: 650 }} aria-label="movie table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'primary.100' }}>Title</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>vote_average</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>vote_count</TableCell>
            <TableCell sx={{ color: 'primary.100' }}>release_date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {datas
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data) => {
              return (
                <MovieListItem
                  key={data.id}
                  backdropPath={data.backdrop_path}
                  title={data.title}
                  voteAverage={data.vote_average}
                  voteCount={data.vote_count}
                  releaseDate={data.release_date}
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
              rowsPerPageOptions={[8, 25, { label: 'All', value: -1 }]}
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
