import React from 'react';
import { Box, Typography } from '@mui/material';

interface RowItems{
  title: string;
  content: string;
}

const FareCondition: React.FC<RowItems> = ({ title, content }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '180px' }}>
        <Typography sx={styles.secondtitle}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.content}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
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
    }
  }
export default FareCondition;