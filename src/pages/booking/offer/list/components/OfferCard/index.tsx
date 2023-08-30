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
import PersonIcon from '@mui/icons-material/Person';
interface Props {
  isAppExclusive?: boolean;
  label: string;
  price: number;
  onClick?: () => void;
}

const App = (props: Props) => {
  const { isAppExclusive, label, price = 0, onClick } = props;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          p: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {isAppExclusive && (
          <Box
            sx={{
              backgroundColor: '#FF9F00',
              px: 1,
              fontWeight: '700',
              height: '20px',
              lineHeight: '20px',
              display: 'inline-block',
              color: '#000',
              fontSize: '10px',
              mb: 0.5,
              position: 'absolute',
              top: 0,
              left: 20,
            }}
          >
            APP EXCLUSIVE
          </Box>
        )}
        <Box>
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 400,
              color: '#4a4a4a',
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 400,
              color: '#2c2c2c',
              fontFamily: 'Sigvar Serial',
            }}
          >
            {price.toLocaleString()} miles
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ width: '150px', height: '60px' }}
            onClick={onClick}
          >
            SELECT
          </Button>
        </Box>
      </Box>

      <Stack sx={{ p: 1.5, borderTop: '1px #f0f0f0 solid' }} spacing={2}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '140px' }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#666' }}
            >
              Outbound period
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '700', color: '#2c2c2c' }}
            >
              1 Jan - 13 Feb 2018
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '700', color: '#2c2c2c' }}
            >
              24 Feb - 28 Mar 2018
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '140px' }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#666' }}
            >
              Minimum pax
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '700', color: '#2c2c2c' }}
            >
              <PersonIcon />
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '140px' }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#666' }}
            >
              Advanced purchase
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '700', color: '#2c2c2c' }}
            >
              7 days
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '140px' }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '400', color: '#666' }}
            >
              Book by
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '700', color: '#2c2c2c' }}
            >
              31 Dec 2017
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
