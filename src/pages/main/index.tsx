import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideBarSection from '../../components/organisms/SideBarSection';
import MovieListLayout from '../../components/templetes/MovieListLayout';
import UserProfile from '../../components/atoms/UserProfile';
import SearchLayout from '../../components/templetes/SearchLayout';

import getList from '../../apis/list';

export default function Main() {
  const location = useLocation();
  const [data, setData] = useState([]);

  const handleTitleName = useCallback(() => {
    switch (location.pathname) {
      case '/search':
        return '검색';

      default:
        return 'Movie 조회 목록';
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleData = () => {
      switch (location.pathname) {
        case '/search':
          break;

        default:
          getList().then((result) => {
            return setData(result);
          });
          break;
      }
    };

    handleData();
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBarSection />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: '100vh',
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
          <Route
            path="/movie/list"
            element={<MovieListLayout datas={data} />}
          />
          <Route path="/search" element={<SearchLayout />} />
        </Routes>
      </Box>
    </Box>
  );
}
