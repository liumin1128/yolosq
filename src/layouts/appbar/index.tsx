import * as React from 'react';
import { Outlet, history } from 'umi';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const App: React.FunctionComponent = () => {
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
        <AppBar
          position="static"
          color="default"
          sx={{ backgroundColor: '#fff' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => {
                history.back();
              }}
            >
              <ArrowBackIosIcon />
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
            <Box sx={{ width: '56px' }}></Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          width: '100%',
          flex: 1,
          overflowY: 'auto',
          zIndex: 1,

          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <Outlet />
      </Box>
      <Box sx={{ width: '100%' }}></Box>
    </Box>
  );
};

export default App;
