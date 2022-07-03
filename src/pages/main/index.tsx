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
  const [data, setData] = useState([
    {
      adult: false,
      backdrop_path: '/7ff2FyFmskEFfmXHkxuqVr47DiG.jpg',
      genre_ids: [12, 14, 28, 53],
      id: 1979,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Fantastic Four: Rise of the Silver Surfer',
      overview:
        "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
      popularity: 45.605,
      poster_path: '/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg',
      release_date: '2007-06-13',
      title: 'Fantastic Four: Rise of the Silver Surfer',
      video: false,
      vote_average: 5.6,
      vote_count: 6813,
    },
  ]);

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
  }, []);

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
