import * as React from 'react';
import { Outlet, history } from 'umi';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tabs from '@/components/Tabs';

const Home: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', zIndex: 99 }}>
        <Card elevation={1}>
          <Box>
            <AppBar
              position="static"
              color="default"
              sx={{ backgroundColor: '#fff' }}
              elevation={0}
            >
              <Toolbar
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="primary"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={() => {}}
                >
                  <AddIcon />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '500',
                    fontFamily: 'Sigvar Serial',
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  {document.title}
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="primary"
                  aria-label="open drawer"
                  onClick={() => {}}
                >
                  <AccountCircleIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>

          <Tabs
            options={[
              { key: 'Trip List', label: 'Trip List' },
              { key: 'Today', label: 'Today' },
            ]}
            onChange={(value) => {
              console.log(value);
            }}
            sx={{
              width: '100%',
              '& .MuiTab-root': {
                flex: 1,
              },
            }}
          />
        </Card>
      </Box>

      <Box
        sx={{
          width: '100%',
          flex: 1,
          overflowY: 'auto',
          zIndex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Box sx={{ width: '100%' }}></Box>
    </Box>
  );
};

export default Home;
