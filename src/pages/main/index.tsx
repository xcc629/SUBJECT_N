import Box from '@mui/material/Box';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../../components/organisms/SideBar';

export default function Main() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Routes>
        <Route path="/movie/list" element={<>dd</>} />
        <Route path="/movie/item/add" />
        <Route path="/movie/item/del" />
        <Route path="/search" element={<>d2</>} />
      </Routes>
    </Box>
  );
}
