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
        {[
          {
            key: '1',
            isAppExclusive: true,
            label: 'Economy From',
            price: 20000,
          },
          {
            key: '2',
            isAppExclusive: true,
            label: 'Economy From',
            price: 25000,
          },
          {
            key: '3',
            label: 'Economy From',
            price: 30000,
          },
          {
            key: '4',
            label: 'Economy From',
            price: 50000,
          },
        ].map((i) => {
          return (
            <Card key={i.key}>
              <OfferCard
                {...i}
                onClick={() => {
                  history.push('/booking/offer/detail');
                }}
              />
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default App;
