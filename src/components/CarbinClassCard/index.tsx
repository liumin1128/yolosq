import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { CABIN_CLASS_COLOR } from '@/configs/base';

interface Props {
  title: string;
  subTitle: string;
  price: number;
  carbinClass: string;
  active?: boolean;
}

const CarbinClassCard = (props: Props) => {
  const { title, subTitle, price, carbinClass, active } = props;

  let style = {};

  if (active) {
    switch (carbinClass) {
      case 'F': {
        style = {
          backgroundColor: CABIN_CLASS_COLOR.F,
        };
        break;
      }
      case 'J': {
        style = {
          backgroundColor: CABIN_CLASS_COLOR.J,
        };
        break;
      }
      case 'S': {
        style = {
          backgroundColor: CABIN_CLASS_COLOR.S,
        };
        break;
      }
      case 'Y': {
        style = {
          backgroundColor: CABIN_CLASS_COLOR.Y,
          color: '#fff',
        };
        break;
      }
      default: {
      }
    }
  }

  console.log('style');
  console.log(style);
  return (
    <Card sx={{ ...style }}>
      <Box
        sx={{
          py: 1,
          px: 1.5,
          height: 120,
          width: 150,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '10px',
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            fontFamily: 'Sigvar Serial',
          }}
        >
          {price.toLocaleString()}
        </Typography>
      </Box>
    </Card>
  );
};

export default CarbinClassCard;
