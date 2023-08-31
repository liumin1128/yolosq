import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: `${100 / 7}%`,
  height: 0,
  paddingTop: `${100 / 7}%`,
  position: 'relative',
  margin: '8px 0',
}));

interface MonthProps {
  month: string;
  range: Dayjs[];
  onClick: (d: Dayjs) => void;
}

const Month = (props: MonthProps) => {
  const { month, range = [], onClick } = props;
  const title = dayjs(month).format('MMMM YYYY');
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 获取当前月份第一天是星期几
  const firstDayOfWeek = dayjs(month).startOf('month').day();

  // 生成日历表格
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i += 1) {
    days.push({
      key: i,
    });
  }
  for (let i = 1; i <= dayjs(month).daysInMonth(); i += 1) {
    days.push({
      key: firstDayOfWeek + i,
      label: i,
      price: 2000,
      day: dayjs(month).date(i),
    });
  }

  return (
    <Stack>
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
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
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
              </Box>
            </StyledGrid>
          );
        })}
      </Grid>

      <Grid container>
        {days.map((day) => {
          let isStart;
          let isEnd;
          let isSame;

          if (Array.isArray(range) && range.length > 0) {
            isSame = range.length === 1;
            isStart = day.day?.isSame(range[0], 'day');
            isEnd = day.day?.isSame(range[range.length - 1], 'day');
          }

          let isBetween;
          if (!isStart && !isEnd && !isSame) {
            if (day.day?.isAfter(range[0]) && day.day?.isBefore(range[1])) {
              isBetween = true;
            }
          }

          let style = {};
          let style2 = {};
          if (isSame && isStart && isEnd) {
            style2 = {
              backgroundColor: '#7789AD',
              color: '#fff',
            };
          } else if (isStart) {
            style = {
              backgroundColor: 'rgba(0,38,107,0.1)',
              borderRadius: '100% 0 0 100%',
            };
            style2 = {
              backgroundColor: '#7789AD',
              color: '#fff',
            };
          } else if (isEnd) {
            style = {
              backgroundColor: 'rgba(0,38,107,0.1)',
              borderRadius: '0 100% 100% 0',
            };
            style2 = {
              backgroundColor: '#00266B',
              color: '#fff',
            };
          } else if (isBetween) {
            style = {
              backgroundColor: 'rgba(0,38,107,0.1)',
            };
          }

          return (
            <StyledGrid key={day.key}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  ...style,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderRadius: '100%',
                    ...style2,
                  }}
                  onClick={() => {
                    if (day?.day) {
                      onClick(day?.day);
                    }
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: '18px',
                      lineHeight: '18px',
                      color: isStart || isEnd ? '#fff' : '#2c2c2c',
                    }}
                  >
                    {day.day?.format('DD')}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: '10px',
                      lineHeight: '14px',
                      fontFamily: 'Sigvar Serial',
                      color: isStart || isEnd ? '#fff' : '#666666',
                    }}
                  >
                    {day.price?.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </StyledGrid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Month;
