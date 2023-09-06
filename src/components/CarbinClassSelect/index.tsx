import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CarbinClassCard from '@/components/CarbinClassCard';

interface Item {
  key: string;
  title: string;
  subTitle: string;
  price: number;
  carbinClass: string;
  active?: boolean;
}

interface Props {
  list: Item[];
}

const CarbinClassSelect = (props: Props) => {
  const { list } = props;

  const [currentCarbinClass, setCurrentCarbinClass] = React.useState(1);

  return (
    <Stack spacing={1} direction="row">
      {list.map((item, index) => {
        return (
          <Box
            key={item.key}
            onClick={() => {
              setCurrentCarbinClass(index);
            }}
          >
            <CarbinClassCard active={currentCarbinClass === index} {...item} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default CarbinClassSelect;
