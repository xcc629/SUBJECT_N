import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { UserProfileProps } from '../../types/propsTypes';

export default function UserProfile({ userEmail }: UserProfileProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
        {userEmail}
      </Typography>
      <Avatar sx={{ marginLeft: '10px', width: '45px', height: '45px' }}>
        {userEmail[0]}
      </Avatar>
    </Box>
  );
}
