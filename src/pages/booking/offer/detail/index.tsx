import React, { useEffect } from 'react';
import { history } from 'umi';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OfferCard from './components/OfferCard';
import PersonIcon from '@mui/icons-material/Person';
import RowItems from '@/components/Widget/RowItems';
import { Link as MuiLink } from '@mui/material';


const App: React.FunctionComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          height: 0,
          backgroundImage: 'url(/images/adelaide2.png)',
          width: '100%',
          paddingTop: '50%',
        }}
      ></Box>

      <Stack sx={{ p: 1 }} spacing={1}>
        <Card>
          <Box
            sx={{
              display: 'flex',
              p: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  color: '#4a4a4a',
                }}
              >
                Economy From
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#2c2c2c',
                  fontFamily: 'Sigvar Serial',
                }}
              >
                {(2000).toLocaleString()} miles
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ width: '150px', height: '60px' }}
                onClick={() => {
                  history.push('/booking/flight');
                }}
              >
                BOOK NOW
              </Button>
            </Box>
          </Box>
        </Card>
        <Card>
          <Stack sx={{ p: 1 }} spacing={1}>
            <Box>
              <Typography sx={styles.title}>
                Travel Dates
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography sx={styles.secondtitle}>
                  Outbound period
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.content}>
                  15 Set 2023 - 23 Sep 2023
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography sx={styles.secondtitle}>
                  Travel completion date
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.content}>
                  25 Sep 2023, Mon
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography sx={styles.secondtitle}>
                  Book by
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.content}>
                  29 Aug 2023
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>

        <Card>
          <Stack sx={{ p: 1 }} spacing={1}>
            <Box>
              <Typography sx={styles.title}>
                Fare Conditions
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ width: '180px' }}>
                    <Typography sx={styles.secondtitle}>
                      Minimum pax
                    </Typography>
                  </Box>

                  <Box>
                    <PersonIcon />
                    <PersonIcon />
                  </Box>
                </Box>

                <RowItems title="Itinerary change" content="Not allowed" />
                <RowItems title="Cancellation/Refund" content="No refund" />
                <RowItems title="Minimum stay" content="2 days" />
                <RowItems title="Maximum stay" content="1 month" />
                <RowItems title="Advanced purchase" content="7 days" />

              </Stack>
            </Box>
          </Stack>
        </Card>

        <Card>
          <Stack sx={{ p: 1 }} spacing={1}>
            <Typography sx={styles.title}>
              KrisFlyer
            </Typography>

            <Stack spacing={2}>
              <RowItems title="Earn KrisFlyer miles" content="Yes" />
              <RowItems title="Upgrade with miles" content="Yes" />
            </Stack>
          </Stack>
        </Card>


        <Card sx={{ backgroundColor: 'rgba(255, 0, 0, 0)' }}>
          <Stack sx={{ paddingY: 0 }}>
            <Box sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.bondTitle}>
                Valid Flights
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.secondtitle}>
                Availability of this fare deal is based on flight departure times.
              </Typography>
            </Box>

            <Box sx={{ paddingTop: 1, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.secondtitle}>
                Valid inbound flights: Valid on SQ866/ SQ868/ SQ872/ SQ890 only
              </Typography>
            </Box>


            <Box sx={{ paddingTop: 2, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.bondTitle}>
                Itinerary Change
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.secondtitle}>
                Change of flight or date for travel out of and into Singapore is strictly not permitted.
              </Typography>
            </Box>

            <Box sx={{ paddingTop: 2, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.bondTitle}>
                Cancellation / Refund
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.secondtitle}>
                No refund. Unused airport taxes will be refunded.
              </Typography>
            </Box>

            <Box sx={{ paddingTop: 2, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>
              <Typography sx={styles.secondtitle}>
                * Terms and conditions apply
              </Typography>
            </Box>

            <Box sx={{ paddingTop: 1, paddingBottom: 0, paddingLeft: 1.5, paddingRight: 1.5 }}>

              <p>
                <MuiLink href="https://www.baidu.com">View other conditions&gt;</MuiLink>
              </p>
            </Box>
          </Stack>
        </Card>

      </Stack>
    </Box>
  );
};

const styles = {
  title: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#AF8F62',
    fontFamily: 'Proxima Nova',
  },
  secondtitle: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#666',
    fontFamily: 'Proxima Nova',
  },
  content: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#2C2C2C',
    fontFamily: 'Proxima Nova',
  },
  bondTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#2C2C2C',
    fontFamily: 'Proxima Nova',
  }
}
export default App;
