import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  value: number;
}

const CustomTabs = (props: Props) => {
  const { value = 0 } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        height: '10px',
        width: '100%',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          borderRadius: '10px',
          backgroundColor: 'red',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '66.66%',
          borderRadius: '10px',
          backgroundColor: '#FF9F00',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '33.33%',
          borderRadius: '10px',
          backgroundColor: '#05B410',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: `${value * 100}%`,
          height: '10px',
          width: '10px',
          borderRadius: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 0 0 2px #00266B',
          transform: 'translate(-50%, 0)',
        }}
      />
    </Box>
  );
};

export default CustomTabs;
