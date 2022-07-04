import * as React from 'react';
import { useState, useCallback } from 'react';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PersonListItem from '../molecules/PersonListItem';

import { PersonListSectionProps } from '../../types/propsTypes';
import MovieListSection from './MovieListSection';
import TVShowListSection from './TVShowListSection';
import { MovieListDataType, TVshowDataType } from '../../types/dataTypes';

export default function PersonListSection({ datas }: PersonListSectionProps) {
  const [selectedIndx, setSelectedIndx] = useState(0);

  const makeList = useCallback(
    (type: 'movie' | 'tv') => {
      if (datas.length) {
        const list = datas[selectedIndx].known_for.filter((data) => {
          return data.media_type === type;
        });

        switch (type) {
          case 'movie':
            return (
              <MovieListSection
                datas={list as unknown as MovieListDataType[]}
                types="search_people"
              />
            );

          case 'tv':
            return (
              <TVShowListSection datas={list as unknown as TVshowDataType[]} />
            );
          default:
            break;
        }
      }
      return (
        <Box
          component={Paper}
          sx={{
            p: 2,
          }}
        >
          해당하는 작품이 없습니다
        </Box>
      );
    },
    [selectedIndx],
  );

  return (
    <Box sx={{ width: '1120px', m: '0 auto', mb: 5 }}>
      <Paper sx={{ p: 1, display: 'flex', overflowX: 'scroll' }}>
        {datas.length ? (
          datas.map((data, idx) => {
            return (
              <Box
                key={data.id}
                onClick={() => {
                  setSelectedIndx(idx);
                }}
                sx={{
                  borderRadius: '5px',
                  bgcolor: selectedIndx === idx ? 'primary.300' : 'transparent',
                }}
              >
                <PersonListItem
                  key={data.id}
                  profilePath={data.profile_path}
                  name={data.name}
                  department={data.known_for_department}
                />
              </Box>
            );
          })
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '40px auto',
            }}
          >
            검색결과가 없습니다
          </Box>
        )}
      </Paper>
      <Typography variant="h6" mt={4} mb={1}>
        출연작
      </Typography>
      <TreeView
        aria-label="toggle"
        defaultExpanded={['1', '2']}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: '1120px', overflowY: 'auto' }}
      >
        <TreeItem
          nodeId="1"
          label="Movie"
          sx={{
            width: '100%',
          }}
        >
          {datas && makeList('movie')}
        </TreeItem>
        <TreeItem
          nodeId="2"
          label="TV"
          sx={{
            width: '100%',
            mt: 3,
          }}
        >
          {datas && makeList('tv')}
        </TreeItem>
      </TreeView>
    </Box>
  );
}
