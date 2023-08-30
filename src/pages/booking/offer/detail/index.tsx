import React, { useEffect } from 'react';
import { history } from 'umi';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OfferCard from './components/OfferCard';

const App: React.FunctionComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          height: 0,
          backgroundImage: 'url(/images/adelaide2.png)',
          width: '100%',
          paddingTop: '50%',
        }}
      ></Box>

      <Stack sx={{ p: 1 }} spacing={1}>
        <Card>
          <Box
            sx={{
              display: 'flex',
              p: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  color: '#4a4a4a',
                }}
              >
                Economy From
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#2c2c2c',
                  fontFamily: 'Sigvar Serial',
                }}
              >
                {(2000).toLocaleString()} miles
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ width: '150px', height: '60px' }}
                onClick={() => {
                  history.push('/booking/flight');
                }}
              >
                SELECT
              </Button>
            </Box>
          </Box>
        </Card>

        <Card>Travel Dates</Card>
      </Stack>
    </Box>
  );
};

export default App;
