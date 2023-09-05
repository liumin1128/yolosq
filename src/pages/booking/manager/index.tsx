import React from 'react';
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

const Home: React.FunctionComponent = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', p: 1 }}>
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

              <Progress value={0.33} />

              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#2c2c2c',
                }}
              >
                Your Waitlisted Booking will automatically be cancelled in{' '}
                <span style={{ fontWeight: '700' }}>5 Days</span>.
              </Typography>

              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: '#2c2c2c',
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
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            {[
              {
                key: 'Change Date',
                label: 'Change Date',
                subLabel: 'Find available date for same class',
              },
              {
                key: 'Upgrade to Advantage',
                label: 'Upgrade to Advantage',
                subLabel: 'Check Availability for Saver Advantage',
              },
              {
                key: 'KF Escapes',
                label: 'KF Escapes',
                subLabel: '30% Off Flight Redemption',
              },
              {
                key: 'Fare Deals',
                label: 'Fare Deals',
                subLabel: 'Check Latest Flight Promotion',
              },
              {
                key: 'Cancel Waitlist',
                label: 'Cancel Waitlist',
              },
            ].map((i) => {
              return (
                <ListItem
                  key={i.key}
                  divider
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <ChevronRightIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <ImageIcon />
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
