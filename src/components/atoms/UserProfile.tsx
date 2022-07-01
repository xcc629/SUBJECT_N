import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import { UserProfileProps } from '../../types/propsTypes';

export default function UserProfile({ userEmail }: UserProfileProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
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
