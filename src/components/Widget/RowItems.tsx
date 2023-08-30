import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface RowItems {
  title: string;
  content: string;
}

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
  },
};

const FareCondition: React.FC<RowItems> = ({ title, content }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '180px' }}>
        <Typography sx={styles.secondtitle}>{title}</Typography>
      </Box>
      <Box>
        <Typography sx={styles.content}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default FareCondition;
