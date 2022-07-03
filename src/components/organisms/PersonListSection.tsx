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
      const list = datas[selectedIndx].known_for.filter((data) => {
        return data.media_type === type;
      });

      if (type === 'movie') {
        return (
          <MovieListSection
            datas={list as unknown as MovieListDataType[]}
            types="search_people"
          />
        );
      }
      return <TVShowListSection datas={list as unknown as TVshowDataType[]} />;
    },
    [selectedIndx],
  );

  return (
    <Box sx={{ width: '1120px', m: '0 auto', mb: 5 }}>
      <Paper sx={{ p: 1, display: 'flex', overflowX: 'scroll' }}>
        {datas.map((data, idx) => {
          return (
            <Box
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
        })}
      </Paper>
      <Typography variant="h6" mt={4} mb={1}>
        출연작
      </Typography>
      <TreeView
        aria-label="toggle"
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
          {makeList('movie')}
        </TreeItem>
        <TreeItem
          nodeId="5"
          label="TV"
          sx={{
            width: '100%',
          }}
        >
          {makeList('tv')}
        </TreeItem>
      </TreeView>
    </Box>
  );
}
