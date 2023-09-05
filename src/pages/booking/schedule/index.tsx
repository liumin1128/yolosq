import React from 'react';
import { history } from 'umi';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home: React.FunctionComponent = () => {
  const [current, setcurrent] = React.useState(0);
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', flex: 1 }}>
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#2c2c2c',
            }}
          >
            Singapore to Bangkok
          </Typography>

          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#666',
            }}
          >
            Waitlist status are indicated in 3 different colours according to
            number of passengers in the waitlist. The more passenger in the
            waitlist the lower of chances of getting confirmation. You may refer
            to our Redemption booking terms and conditions.
          </Typography>
        </Box>

        {[0, 1, 2, 3, 4].map((i) => {
          return (
            <Box
              key={i}
              sx={{ display: 'flex', borderBottom: '1px #eee solid' }}
              onClick={() => {
                setcurrent(i);
              }}
            >
              <Box
                sx={{
                  width: 130,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  px: 2,
                  height: 120,
                  background: current === i ? '#ddd' : '#f1f1f1',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#666',
                  }}
                >
                  Depart
                </Typography>

                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#2c2c2c',
                  }}
                >
                  20 Sep <br /> Fri
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  px: 2,
                  height: 120,
                  color: current === i ? '#fff' : 'inherit',
                  background: current === i ? '#00266B' : '#fff',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: 'Sigvar Serial',
                    textAlign: 'center',
                  }}
                >
                  13500
                </Typography>

                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: 'Sigvar Serial',
                    textAlign: 'center',
                  }}
                >
                  miles
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Card>
        <Box sx={{ p: 1.5 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: '56px' }}
            onClick={() => {
              history.back();
            }}
          >
            Search
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
