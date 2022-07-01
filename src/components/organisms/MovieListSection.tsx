import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { useCallback, useState } from 'react';
import MovieListItem from '../molecules/MovieListItem';

const datas = [
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
  {
    adult: false,
    backdrop_path: '/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    popularity: 69.864,
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '2014-03-20',
    title: 'Captain America: The Winter Soldier',
    video: false,
    vote_average: 7.7,
    vote_count: 16271,
  },
];

export default function MovieListSection() {
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
            .map((data) => (
              <MovieListItem
                key={data.id}
                backdropPath={data.backdrop_path}
                title={data.title}
                voteAverage={data.vote_average}
                voteCount={data.vote_count}
                releaseDate={data.release_date}
              />
            ))}
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
