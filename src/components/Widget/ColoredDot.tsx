import React from 'react';

interface ColoredDotProps {
  color: string;
}

const ColoredDot: React.FC<ColoredDotProps> = ({ color }) => {
  const dotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '5px',
  };

  return <span style={dotStyle}></span>;
};

export default ColoredDot;