import React from 'react';
import { history } from 'umi';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ColoredDot from '@/components/Widget/ColoredDot';
import Progress from '@/components/Progress';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Alert from '@mui/material/Alert';
import SvgIcon from '@mui/material/SvgIcon';
import DateChangeIcon from '@/assets/icon/Date-change.svg';
import UpgradeMilesIcon from '@/assets/icon/Upgrade-miles.svg';
import PriorityIcon from '@/assets/icon/Priority.svg';
import NoShowsIcon from '@/assets/icon/No-shows.svg';
import ActiveIcon from '@/assets/icon/Active.svg';

const list = [
  {
    key: 'Change Date',
    label: 'Change Date',
    subLabel: 'Get confirm booking now',
    icon: DateChangeIcon,
    onClick: () => {
      history.push('/booking/schedule');
    },
  },
  {
    key: 'Upgrade to Advantage',
    label: 'Upgrade to Advantage',
    subLabel: 'Higher chance of redemption',
    icon: UpgradeMilesIcon,
    onClick: () => {
      history.push('/booking/flight');
    },
  },
  {
    key: 'KF Escapes',
    label: 'KF Escapes',
    subLabel: '30% Off for October Flight Redemption ',
    icon: ActiveIcon,
  },
  {
    key: 'Request a Callback',
    label: 'Request a Callback',
    subLabel: 'Check Latest Flight Promotion',
    icon: PriorityIcon,
  },
  {
    key: 'Kris Recommends (Coming Soon)',
    label: 'Kris Recommends (Coming Soon)',
    subLabel: 'SQ Smart Recommendations ',
    icon: ActiveIcon,
  },
  {
    key: 'Fare Deals',
    label: 'Fare Deals',
    subLabel: 'Check Latest Flight Promotion',
    icon: ActiveIcon,
    onClick: () => {
      history.push('/booking/fare');
    },
  },
  {
    key: 'Cancel Waitlist',
    label: 'Cancel Waitlist',
    icon: NoShowsIcon,
  },
];

const Home: React.FunctionComponent = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', p: 1, pb: 0 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#666',
            textAlign: 'center',
          }}
        >
          Last updated 12:45,
        </Typography>
      </Box>

      <Box sx={{ width: '100%', p: 1 }}>
        <Card>
          <Box
            sx={{
              width: '100%',
              p: 1.5,
            }}
          >
            <Stack spacing={1}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#AF8F62',
                }}
              >
                Redemption Booking
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: 'center', mb: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#666',
                  }}
                >
                  Status:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#2c2c2c',
                  }}
                >
                  Waitlisted (Economy Saver)
                </Typography>

                <ColoredDot color="green" />
              </Stack>

              <Alert severity="warning">
                Booking will automatically be cancelled in{' '}
                <span style={{ fontWeight: 700 }}>30 Days</span>. Check our
                recommendations below.
              </Alert>

              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: '#2c2c2c',
                  fontStyle: 'italic',
                }}
              >
                Disclaimer: Redemption booking waitlist status does not
                guarantee confirmation of your seat. This is just indication at
                the time of booking. Status might change to low closer to
                departure date.
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#AF8F62',
                mt: 3,
              }}
            >
              Our Recommendation
            </Typography>
          </Box>

          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
            }}
          >
            {list.map((i) => {
              return (
                <ListItem
                  key={i.key}
                  divider
                  secondaryAction={<ChevronRightIcon />}
                  onClick={i.onClick}
                >
                  <ListItemAvatar>
                    <img src={i.icon} alt="" />
                  </ListItemAvatar>
                  <ListItemText primary={i.label} secondary={i.subLabel} />
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
