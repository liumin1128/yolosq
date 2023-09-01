import * as React from 'react';
import { history } from 'umi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Tabs from '@/components/Tabs';
import CarbinClassSelect from '@/components/CarbinClassSelect';
import FlightCard from '@/components/FlightCard';
import MarketingAirlineCodeSQIcon from '@/components/FlightCard/sq.svg';
import MarketingAirlineCodeScootIcon from '@/components/FlightCard/scoot.svg';
import DestinationCard from './components/DesctinationCard';

const list = [
  {
    key: 'Aalborg',
    title: 'Aalboarg',
    carbinClass: 'Econnomy',
    image: '/images/aalborg.png',
    label: 'FROM',
    price: 10000,
  },
  {
    key: 'Adelaide',
    title: 'Adelaide',
    carbinClass: 'Econnomy',
    image: '/images/adelaide.png',
    label: 'FROM',
    price: 20000,
    isFeatured: true,
  },

  {
    key: 'Balikpapan',
    title: 'Balikpapan',
    carbinClass: 'Premium Economy',
    image: '/images/balikpapan.png',
    label: 'FROM',
    price: 30000,
    isFeatured: true,
  },

  {
    key: 'Aalborg2',
    title: 'Aalboarg',
    carbinClass: 'Econnomy',
    image: '/images/aalborg.png',
    label: 'FROM',
    price: 10000,
  },
  {
    key: 'Adelaide2',
    title: 'Adelaide',
    carbinClass: 'Econnomy',
    image: '/images/adelaide.png',
    label: 'FROM',
    price: 20000,
    isFeatured: true,
  },
  {
    key: 'Balikpapan2',
    title: 'Balikpapan',
    carbinClass: 'Premium Economy',
    image: '/images/balikpapan.png',
    label: 'FROM',
    price: 30000,
    isFeatured: true,
  },

  {
    key: 'Aalborg3',
    title: 'Aalboarg',
    carbinClass: 'Econnomy',
    image: '/images/aalborg.png',
    label: 'FROM',
    price: 10000,
  },
  {
    key: 'Adelaide3',
    title: 'Adelaide',
    carbinClass: 'Econnomy',
    image: '/images/adelaide.png',
    label: 'FROM',
    price: 20000,
    isFeatured: true,
  },
  {
    key: 'Balikpapan3',
    title: 'Balikpapan',
    carbinClass: 'Premium Economy',
    image: '/images/balikpapan.png',
    label: 'FROM',
    price: 30000,
    isFeatured: true,
  },

  {
    key: 'Aalborg4',
    title: 'Aalboarg',
    carbinClass: 'Econnomy',
    image: '/images/aalborg.png',
    label: 'FROM',
    price: 10000,
  },
  {
    key: 'Adelaide4',
    title: 'Adelaide',
    carbinClass: 'Econnomy',
    image: '/images/adelaide.png',
    label: 'FROM',
    price: 20000,
    isFeatured: true,
  },
  {
    key: 'Balikpapan4',
    title: 'Balikpapan',
    carbinClass: 'Premium Economy',
    image: '/images/balikpapan.png',
    label: 'FROM',
    price: 30000,
    isFeatured: true,
  },
];
const Home: React.FunctionComponent = () => {
  const handleClick = () => {
    console.log('handleClick');
    history.push('/booking/calender');
  };
  return (
    <div>
      <Stack sx={{ p: 1 }} spacing={1}>
        <Card>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                height: '76px',
              }}
            >
              <Typography
                sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400 }}
              >
                From
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Singapore
              </Typography>
            </Box>
            <Box sx={{ width: '1px', backgroundColor: '#e6e6e6' }}></Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                height: '76px',
              }}
            >
              <Typography
                sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400 }}
              >
                To
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                All Destinations
              </Typography>
            </Box>
          </Box>
        </Card>

        <Box>
          <Grid container spacing={1}>
            {list.map((item) => {
              return (
                <Grid key={item.key} item xs={6}>
                  <Card onClick={handleClick}>
                    <DestinationCard {...item} />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Typography sx={{ color: '#2c2c2c', fontSize: '14px' }}>
          * Terms and conditions apply
        </Typography>
      </Stack>
    </div>
  );
};

export default Home;
