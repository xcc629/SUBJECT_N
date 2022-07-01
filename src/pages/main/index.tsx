import Box from '@mui/material/Box';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../../components/organisms/SideBar';
import MovieListSection from '../../components/MovieListSection';
import UserProfile from '../../components/atoms/UserProfile';

export default function Main() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'primary.500',
          width: '100%',
          height: '100vh',
        }}
      >
        <UserProfile userEmail="www.www" />
        <Routes>
          <Route path="/movie/list" element={<MovieListSection />} />
          <Route path="/movie/item/add" />
          <Route path="/movie/item/del" />
          <Route path="/search" element={<>d2</>} />
        </Routes>
      </Box>
    </Box>
  );
}
