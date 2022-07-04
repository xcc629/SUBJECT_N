import * as React from 'react';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ViewListIcon from '@mui/icons-material/ViewList';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import LogoImageText from '../atoms/LogoImageText';

export default function SideBarSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goTo = (link: string) => {
    navigate(link);
  };

  const handleFirstLocation = useCallback(() => {
    switch (location.pathname) {
      case '/search':
        setSelectedIndex(1);
        break;

      default:
        setSelectedIndex(0);
        break;
    }
  }, []);

  const handleListItemClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);
    },
    [selectedIndex],
  );

  useLayoutEffect(() => {
    handleFirstLocation();
  }, []);

  return (
    <Box sx={{ width: '255px', height: '100%', bgcolor: 'background' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          m: 4,
        }}
      >
        <LogoImageText withText />
      </Box>
      <List component="nav" aria-label="main menu">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => {
            handleListItemClick(0);
            goTo('/movie/list');
          }}
          sx={{ color: selectedIndex === 0 ? 'primary.300' : 'primary.400' }}
        >
          <ViewListIcon sx={{ margin: '0 20px' }} />
          <ListItemText primary="Movie 목록 조회" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => {
            handleListItemClick(1);
            goTo('/search');
          }}
          sx={{ color: selectedIndex === 1 ? 'primary.300' : 'primary.400' }}
        >
          <ManageSearchIcon sx={{ margin: '0 20px' }} />
          <ListItemText primary="검색" />
        </ListItemButton>
      </List>
    </Box>
  );
}
