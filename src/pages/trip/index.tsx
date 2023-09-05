import * as React from 'react';
import { Outlet, history } from 'umi';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tabs from '@/components/Tabs';
import Carousel from 'react-material-ui-carousel';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import Slider from 'react-slick';
import ColoredDot from '@/components/Widget/ColoredDot';
import MarketingAirlineCodeSQIcon from '@/components/FlightCard/sq.svg';

const Home: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
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

      <Box sx={{ width: '100%', flex: 1, overflow: 'auto' }}>
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

        <Box
          sx={{
            width: '100%',
          }}
        >
          <Card>
            <Box
              sx={{
                width: '100%',
                backgroundImage: 'url(/images/1.png)',
                backgroundSize: 'cover',
                py: 2,
                '& .slick-dots button::before': {
                  content: '""',
                },
                '& .slick-dots li': {
                  width: '10px',
                  height: '10px',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  margin: '0 2px',
                },
                '& .slick-dots .slick-active': {
                  width: '20px',
                  content: '""',
                  backgroundColor: '#00266B',
                },
              }}
            >
              <Slider
                // slidesToScroll: 1,
                dots
                centerMode
                centerPadding={'66px'}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
              >
                {[1, 2, 3].map((i) => {
                  return (
                    <Box
                      sx={{
                        width: '100%',
                        // border: '1px red solid',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        Trip to San Francisc
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        HUF908
                      </Typography>

                      <Box sx={{ mb: 2 }}></Box>

                      <Box
                        sx={{
                          margin: '0 auto',
                          width: '240px',
                          height: '280px',
                          border: '18px #fff solid',
                          borderRadius: '110px',
                          backgroundImage: 'url(/images/3.png)',
                          backgroundSize: '100%',

                          display: 'flex',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <Box></Box>
                        <Box></Box>
                        <Typography
                          sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#fff',
                            textAlign: 'center',
                          }}
                        >
                          Flight {i}:
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '30px',
                            fontWeight: '700',
                            color: '#fff',
                            textAlign: 'center',
                          }}
                        >
                          SIN <ConnectingAirportsIcon /> BKK
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#fff',
                            textAlign: 'center',
                          }}
                        >
                          SQ 2 <br />
                          A350-900
                        </Typography>
                        <Box></Box>
                        <Box></Box>
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
            </Box>

            <Box sx={{ p: 2.5 }}>
              <Box sx={{ pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: '17px',
                    fontWeight: '400',
                    color: '#2c2c2c',
                    textAlign: 'center',
                    mb: 1,
                  }}
                >
                  Online check-in opens
                </Typography>

                <Typography
                  sx={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#AF8F62',
                    textAlign: 'center',
                  }}
                >
                  48 hours before departure.
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ height: '60px' }}
                onClick={() => {
                  history.push('/booking/manager');
                }}
              >
                MANAGE BOOKING
              </Button>
            </Box>
          </Card>
        </Box>

        <Box
          sx={{
            width: '100%',
            p: 1,
          }}
        >
          <Card>
            <Box
              sx={{
                width: '100%',
                p: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#AF8F62',
                }}
              >
                Flight Details
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
                  Booking status
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#2c2c2c',
                  }}
                >
                  Waitlisted
                </Typography>

                <ColoredDot color="green" />
              </Stack>

              <Button variant="contained" fullWidth sx={{ height: '60px' }}>
                Check Status
              </Button>
            </Box>

            <Divider></Divider>

            <Box
              sx={{
                width: '100%',
                p: 1.5,
              }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#666',
                  }}
                >
                  Singapore Airlines •
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#666',
                  }}
                >
                  SQ 8
                </Typography>

                <Box sx={{ height: 17, width: 17, mr: 0.5 }}>
                  <img
                    alt="MarketingAirlineCodeSQIcon"
                    style={{ width: '17px', height: '17px' }}
                    src={MarketingAirlineCodeSQIcon}
                  />
                </Box>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#666',
                  }}
                >
                  Economy Saver •
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#666',
                  }}
                >
                  A350-900
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#666',
                  }}
                >
                  Flying time •
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#666',
                  }}
                >
                  3h 50m
                </Typography>
              </Stack>

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#666',
                  }}
                >
                  Scheduled 18:30
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#666',
                  }}
                >
                  Scheduled 22:15
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#2c2c2c',
                  }}
                >
                  Estimated
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#2c2c2c',
                  }}
                >
                  Estimated
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 600,
                    color: '#2c2c2c',
                  }}
                >
                  18:30
                </Typography>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 600,
                    color: '#2c2c2c',
                  }}
                >
                  22:15
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#2c2c2c',
                  }}
                >
                  1 Nov, Wed
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#2c2c2c',
                  }}
                >
                  1 Nov, Wed
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Proxima Nova',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#AF8F62',
                  }}
                >
                  SIN
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
                  }}
                >
                  SFO
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#2c2c2c',
                  }}
                >
                  Singapore
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#2c2c2c',
                  }}
                >
                  San Francisco
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#2c2c2c',
                  }}
                >
                  Changi Intl <br /> Terminal 3
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#2c2c2c',
                    textAlign: 'right',
                  }}
                >
                  San Francisco <br />
                  Intl Terminal I
                </Typography>
              </Box>
            </Box>
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
    </Box>
  );
};

export default Home;
