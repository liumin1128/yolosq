import React from 'react';
import { history } from 'umi';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import dayjs, { Dayjs } from 'dayjs';
import Month from './components/Month';

const Home: React.FunctionComponent = () => {
  const handleClick = () => {
    history.push('/booking/offer/list');
  };

  const currentMonth = dayjs().format('YYYY-MM');
  const months = [];
  for (let i = 0; i < 12; i += 1) {
    months.push(dayjs(currentMonth).add(i, 'month').format('YYYY-MM'));
  }

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
                Departure Date
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                1 Nov 2022
              </Typography>
            </Box>
            <Box sx={{ width: '1px', backgroundColor: '#e6e6e6' }} />
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
                Return Date
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                2 Nov 2022
              </Typography>
            </Box>
          </Box>
        </Card>

        <Stack sx={{ p: 1 }} spacing={4}>
          {months.map((month) => {
            return <Month key={month} month={month} />;
          })}
        </Stack>
      </Stack>
    </div>
  );
};

export default Home;
