/* eslint-disable operator-linebreak */
import * as React from 'react';
import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import SearchBar from '../molecules/SearchBar';
import MovieListSection from '../organisms/MovieListSection';
import TVShowListSection from '../organisms/TVShowListSection';

import { getMovie, getPeople, getTvShow } from '../../apis/search';
import PersonListSection from '../organisms/PersonListSection';

export default function SearchLayout() {
  const [type, setType] = useState('');
  const [category, setcategory] = useState('movie');
  const [search, setSearch] = useState('spiderman');
  const [data, setData] = useState();

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setType('loading');
      const encoded = encodeURI(search);
      switch (category) {
        case 'movie':
          getMovie(encoded).then((result) => {
            setType(category);
            return setData(result);
          });
          break;

        case 'tv':
          getTvShow(encoded).then((result) => {
            setType(category);
            return setData(result);
          });
          break;

        case 'people':
          getPeople(encoded).then((result) => {
            setType(category);

            return setData(result);
          });
          break;

        default:
          break;
      }
    },
    [search, category],
  );

  const switchSection = () => {
    if (data) {
      switch (type) {
        case 'movie':
          return <MovieListSection datas={data} types="search_movie" />;

        case 'tv':
          return <TVShowListSection datas={data} />;

        case 'people':
          return <PersonListSection datas={data} />;

        default:
      }
    }
    switch (type) {
      case 'loading':
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
            <CircularProgress color="primary" />
          </Box>
        );

      default:
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            영화, TV, 사람 카테고리를 선택 후 검색어를 입력해주세요!
          </Box>
        );
    }
  };

  return (
    <>
      <SearchBar
        category={category}
        setcategory={setcategory}
        search={search}
        setSearch={setSearch}
        onSubmitForm={onSubmitForm}
      />
      {switchSection()}
    </>
  );
}
