import Box from '@mui/material/Box';
import * as React from 'react';

import { PopoverBoxProps } from '../../types/propsTypes';

export default function PopoverBox({ isOpen, contentText }: PopoverBoxProps) {
  return (
    <Box
      sx={{
        bgcolor: '#222222',
        width: '200px',
        color: 'white',
      }}
    >
      {contentText}
    </Box>
  );
}
