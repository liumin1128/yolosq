import { Outlet, history } from 'umi';
import * as React from 'react';
import Box from '@mui/material/Box';
import FlightIcon from '@mui/icons-material/Flight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BottomNavigation from '@mui/material/BottomNavigation';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LuggageIcon from '@mui/icons-material/Luggage';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';

const list = [
  {
    path: '/home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: '/home/bookingflight',
    label: 'Book Flights',
    icon: <FlightIcon />,
  },
  {
    path: '/home/trip',
    label: 'My Trips',
    icon: <LuggageIcon />,
  },
  {
    path: '/home/flightstatus',
    label: 'Flight Status',
    icon: <WatchLaterIcon />,
  },
  {
    path: '/home/more',
    label: 'More',
    icon: <MoreHorizIcon />,
  },
];

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(2);

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
      <Box
        sx={{
          width: '100%',
          flex: 1,
          overflowY: 'auto',
        }}
      >
        <Outlet />
      </Box>

      <Paper
        sx={{
          pb: 'env(safe-area-inset-bottom)',
          width: '100%',
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            history.push(list[newValue].path);
          }}
          sx={{ width: '100%' }}
        >
          {list.map((i, index) => {
            return (
              <BottomNavigationAction
                key={i.path}
                label={i.label}
                icon={i.icon}
                sx={{
                  padding: 0,
                  '& .MuiBottomNavigationAction-label': {
                    mt: 0.5,
                  },
                }}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
