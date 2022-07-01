import Avatar from '@mui/material/Avatar';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import * as React from 'react';
import Typography from '@mui/material/Typography';
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
