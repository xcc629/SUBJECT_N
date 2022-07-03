import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import { LogoProps } from '../../types/propsTypes';

export default function Logo({ withText }: LogoProps) {
  return (
    <>
      <Avatar
        sx={{
          width: '40px',
          height: '40px',
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <LocalMoviesIcon />
      </Avatar>
      {withText && (
        <Typography
          variant="h6"
          sx={{
            marginLeft: '10px',
            color: 'primary.100',
          }}
        >
          Dashboard
        </Typography>
      )}
    </>
  );
}
