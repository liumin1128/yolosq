import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  title: string;
  carbinClass: string;
  label: string;
  price: number;
  image: string;
  isFeatured?: boolean;
}

const DestinationCard = (props: Props) => {
  const { title, carbinClass, label, price = 0, image, isFeatured } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '100%',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + image + ')',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: '#fff',
          px: 1.5,
          py: 1,
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
              {carbinClass}
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}></Box>

          <Box>
            {isFeatured && (
              <Box
                sx={{
                  backgroundColor: '#FF9F00',
                  px: 1,
                  fontWeight: '700',
                  height: '20px',
                  lineHeight: '20px',
                  display: 'inline-block',
                  color: '#000',
                  fontSize: '10px',
                  mb: 0.5,
                }}
              >
                FEATURED
              </Box>
            )}
            <Typography sx={{ fontSize: '10px', fontWeight: '400' }}>
              {label}
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '400',
                fontFamily: 'Sigvar Serial',
              }}
            >
              {price.toLocaleString()} miles
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DestinationCard;
