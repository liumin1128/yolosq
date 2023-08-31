import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: `${100 / 7}%`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

interface MonthProps {
  month: string;
}

const Month = (props: MonthProps) => {
  const { month } = props;
  const title = dayjs(month).format('MMMM YYYY');
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 获取当前月份第一天是星期几
  const firstDayOfWeek = dayjs(month).startOf('month').day();

  // 生成日历表格
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({
      key: i,
    });
  }
  for (let i = 1; i <= dayjs().daysInMonth(); i++) {
    days.push({
      key: firstDayOfWeek + i,
      label: i,
      price: 2000,
    });
  }

  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '18px',
          color: '#2c2c2c',
          fontWeight: '700',
        }}
      >
        {title}
      </Typography>
      <Grid container>
        {weeks.map((week) => {
          return (
            <StyledGrid key={week} item>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#666',
                }}
              >
                {week[0]}
              </Typography>
            </StyledGrid>
          );
        })}
      </Grid>

      <Grid container>
        {days.map((day) => {
          return (
            <StyledGrid
              key={day.key}
              sx={{
                height: '64px',
              }}
            >
              <Typography
                sx={{ textAlign: 'center', fontSize: '18px', color: '#2c2c2c' }}
              >
                {day.label}
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '10px',
                  fontFamily: 'Sigvar Serial',
                  color: '#666666',
                }}
              >
                {day.price?.toLocaleString()}
              </Typography>
            </StyledGrid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Month;
