import React, { useEffect } from 'react';
import { history } from 'umi';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const App: React.FunctionComponent = () => {
  return (
    <Stack sx={{ p: 1 }} spacing={1}>
      <Card>111</Card>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
      <Box sx={{ height: '200px' }}> 222</Box>
    </Stack>
  );
};

export default App;
