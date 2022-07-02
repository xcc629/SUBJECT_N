import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import { useCallback, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import SideBarSection from '../../components/organisms/SideBarSection';
import MovieListLayout from '../../components/templetes/MovieListLayout';
import UserProfile from '../../components/atoms/UserProfile';
import SearchLayout from '../../components/templetes/SearchLayout';

export default function Main() {
  const location = useLocation();

  const handleTitleName = useCallback(() => {
    switch (location.pathname) {
      case '/search':
        return '검색';

      default:
        return 'Movie 조회 목록';
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBarSection />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
          bgcolor: 'primary.500',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '1122px',
            margin: '20px auto 0 auto',
          }}
        >
          <Typography component="h1" variant="h5">
            {handleTitleName()}
          </Typography>
          <UserProfile userEmail="www.www" />
        </Box>
        <Routes>
          <Route path="/movie/list" element={<MovieListLayout />} />
          <Route path="/movie/item/add" />
          <Route path="/movie/item/del" />
          <Route path="/search" element={<SearchLayout />} />
        </Routes>
      </Box>
    </Box>
  );
}
