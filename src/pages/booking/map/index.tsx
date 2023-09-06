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
      <Box sx={{ width: '100%', flex: 1, overflow: 'auto' }}>
        <img src="/images/map.png" style={{ width: '100%' }} alt="" />
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
