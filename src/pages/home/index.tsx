import * as React from 'react';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Tabs from '@/components/Tabs';
import CarbinClassSelect from '@/components/CarbinClassSelect';
import FlightCard from '@/components/FlightCard';
import MarketingAirlineCodeSQIcon from '@/components/FlightCard/sq.svg';
import MarketingAirlineCodeScootIcon from '@/components/FlightCard/scoot.svg';

let sw;

const Home: React.FunctionComponent = () => {
  console.log('x x x');
  console.log('x x x');
  console.log('x x x');
  console.log('x x x');
  console.log('x x x');

  return (
    <div>
      <Button
        onClick={() => {
          navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('registration');
            console.log(registration);
            sw = registration;
            const customEvent = new CustomEvent('test1', {
              bubbles: true,
              cancelable: true,
              detail: {
                message: 'This is a custom event',
              },
            });
            registration.dispatchEvent(customEvent);
            Notification.requestPermission().then((status) => {
              //   if (status === 'granted') {
              //     registration.showNotification('title');
              //   }
            });
          });
        }}
      >
        register serviceWorker
      </Button>
      <Button
        onClick={() => {
          console.log(navigator.serviceWorker.controller);
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              command: 'oneWayCommunication',
              message: 'Hi, message from YoloSQ',
            });
          }
        }}
      >
        Sent Notification
      </Button>
      <Tabs
        options={[
          { key: ' Singapore Airlines', label: ' Singapore Airlines' },
          { key: 'Star Alliance', label: 'Star Alliance' },
          { key: 'Other Partners', label: 'Other Partners' },
          { key: 'Tab Label1', label: 'Tab Label' },
          { key: 'Tab Label2', label: 'Tab Label' },
          { key: 'Tab Label3', label: 'Tab Label' },
        ]}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <Stack spacing={1} sx={{ p: 1 }}>
        <Box sx={{ px: 1.5, py: 1 }}>
          <Typography variant="h5">Singapore to Hong Kong</Typography>
        </Box>

        <Box>
          <CarbinClassSelect
            list={[
              {
                key: '1',
                carbinClass: 'Y',
                title: 'ECONOMY SAVER',
                subTitle: 'FROM',
                price: 36000,
              },
              {
                key: '2',
                carbinClass: 'Y',
                title: 'ECONOMY ADVANTAGE',
                subTitle: 'FROM',
                price: 76000,
              },
            ]}
          />
        </Box>

        <Card>
          <Box sx={{ p: 1.5 }}>
            <Link
              href="/#"
              sx={{
                display: 'flex',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Compare award types
              <ChevronRightIcon />
            </Link>
          </Box>
        </Card>
        <Box>
          <Stack spacing={1}>
            <FlightCard
              duration={0}
              departureTime="10:25"
              arrivalTime="06:35"
              departureDate="2023-11-01"
              arrivalDate="2023-12-01"
              departureAirportCode="SIN"
              arrivalAirportCode="SFO"
              flightNo="SQ 32"
              price={88000}
            />

            <FlightCard
              duration={0}
              departureTime="10:25"
              arrivalTime="06:35"
              departureDate="2023-11-01"
              arrivalDate="2023-12-01"
              departureAirportCode="SIN"
              arrivalAirportCode="SFO"
              flightNo="SQ 32"
              price={88000}
            />
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
          <Box sx={{ height: 17, width: 17, mr: 0.5 }}>
            <img
              alt="MarketingAirlineCodeScootIcon"
              style={{ width: '17px', height: '17px' }}
              src={MarketingAirlineCodeScootIcon}
            />
          </Box>

          <Box sx={{ height: 17, width: 17, mr: 0.5 }}>
            <img
              alt="MarketingAirlineCodeSQIcon"
              style={{ width: '17px', height: '17px' }}
              src={MarketingAirlineCodeSQIcon}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: 'Proxima Nova',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '17px',
              color: '#2c2c2c',
            }}
          >
            Singapore Airlines Group
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Home;
