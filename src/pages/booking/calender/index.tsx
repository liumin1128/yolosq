import React from 'react';
import { history } from 'umi';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import dayjs, { Dayjs } from 'dayjs';
import Month from './components/Month';

const Home: React.FunctionComponent = () => {
  const [range, setRange] = React.useState<Dayjs[]>([
    // dayjs(),
    // dayjs().add(7, 'day'),
  ]);

  const currentMonth = dayjs().format('YYYY-MM');
  const months = [];
  for (let i = 0; i < 12; i += 1) {
    months.push(dayjs(currentMonth).add(i, 'month').format('YYYY-MM'));
  }

  const handleClick = (value) => {
    if (range.length === 0) {
      setRange([value]);
    } else if (range.length === 1) {
      if (range[0].isAfter(value)) {
        setRange([value]);
      } else {
        setRange([...range, value]);
      }
    } else {
      setRange([value]);
    }

    // if (range[0].isAfter(value)) {
    //   setRange([value]);
    // } else {
    //   setRange([range[0], value]);
    // }
  };

  return (
    <Stack sx={{ p: 1, display: 'flex', height: '100%' }} spacing={1}>
      <Box>
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
                sx={{
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 400,
                }}
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
                {range[0]?.format('D MMM YYYY') || 'Select Date'}
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
                sx={{
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 400,
                }}
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
                {range[1]?.format('D MMM YYYY') || 'Select Date'}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box sx={{ p: 1, flex: 1, overflow: 'auto' }}>
        <Stack spacing={4}>
          {months.map((month) => {
            return (
              <Month
                range={range}
                // range={[dayjs('2023-08-14'), dayjs('2023-08-28')]}
                key={month}
                month={month}
                onClick={handleClick}
              />
            );
          })}
        </Stack>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ height: '56px' }}
        onClick={() => {
          history.back();
        }}
      >
        NEXT
      </Button>
    </Stack>
  );
};

export default Home;
