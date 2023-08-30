import React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MarketingAirlineCodeSQIcon from './sq.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import ColoredDot from '../Widget/ColoredDot';

interface Props {
  duration: number;
  departureTime: string;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  stopCityName: string;
  crossDays: number;
  flightNo: string;
  airlineCode: string;
  price: number;
  needWait: boolean;
  waitlistStatus: string;
}

const getDuration = (durationInSeconds: number) => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(
    2,
    '0',
  )}m`;
};

const FlightCard = (props: Props) => {
  const {
    stopCityName = 'Non-stop',
    duration,
    departureTime,
    arrivalTime,
    departureDate,
    arrivalDate,
    departureAirportCode,
    arrivalAirportCode,
    flightNo,
    price,
    needWait = false,
    waitlistStatus = "Green"
  } = props;
  return (
    <Card>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, borderRight: '1px #f0f0f0 solid' }}>
          <Box sx={{ py: 1, px: 1.5 }}>
            <Typography
              sx={{
                fontFamily: 'Proxima Nova',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '17px',
                color: '#666',
              }}
            >
              {`${stopCityName} • ${getDuration(duration)}`}
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}
            >
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#00266B',
                }}
              >
                {departureTime}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#00266B',
                }}
              >
                {arrivalTime}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '17px',
                }}
              >
                {dayjs(arrivalDate).format('D MMM')}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '17px',
                }}
              >
                {dayjs(departureDate).format('D MMM')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '17px',
                }}
              >
                {dayjs(departureDate).format('ddd')}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '17px',
                }}
              >
                {dayjs(arrivalDate).format('ddd')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#AF8F62',
                  mt: 0.5,
                }}
              >
                {departureAirportCode}
              </Typography>
              <Box
                sx={{
                  flex: 1,
                  height: '1px',
                  width: '100%',
                  backgroundColor: '#AF8F62',
                  margin: '0 10px',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#AF8F62',
                  mt: 0.5,
                }}
              >
                {arrivalAirportCode}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Proxima Nova',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '17px',
                  color: '#666',
                  mt: 1,
                }}
              >
                {`${flightNo} • Airbus A350-900`}
              </Typography>

              <Box sx={{ height: 14, ml: 0.5 }}>
                <img
                  alt="MarketingAirlineCodeSQIcon"
                  style={{ height: '14px' }}
                  src={MarketingAirlineCodeSQIcon}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ pl: 1.5, mt: 0.5 }}>
            <Box
              sx={{
                borderTop: '1px solid #f0f0f0',
                py: 1.5,
              }}
            >
              <Link
                href="/#"
                sx={{
                  display: 'flex',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                More details
                <ChevronRightIcon />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            width: '120px',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {
              needWait&&<Stack spacing={2} sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ margin: '0 1px', fontFamily: 'Proxima Nova', fontSize: '14px', fontWeight: 400, lineHeight: '17px', color: '#FF9F00', }}>
                    Waitlist</Typography>
                  <ColoredDot color={waitlistStatus} />
                </Box>
              </Stack>
            }
            <Typography
              sx={{
                fontFamily: 'Proxima Nova',
                fontSize: '10px',
                fontWeight: 400,
                color: '#666',
              }}
            >
              1 ADULT FROM
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Sigvar Serial',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '22px',
                color: '#2c2c2c',
              }}
            >
              {price.toLocaleString()}
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Sigvar Serial',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '22px',
                color: '#2c2c2c',
              }}
            >
              miles
            </Typography>
          </Box>
          <Button variant="outlined" size="large">
            Select
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default FlightCard;
