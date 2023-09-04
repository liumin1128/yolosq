import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SxProps, Theme } from '@mui/material/styles';

interface TabItem {
  label: string;
  key: string;
}

interface Props {
  options: TabItem[];
  onChange: (key: string) => void;
  value?: string;
  sx?: SxProps<Theme>;
}

const CustomTabs = (props: Props) => {
  const { options, value = 0, onChange, sx } = props;
  const [currentValue, setCurrentValue] = React.useState(value);
  return (
    <Tabs
      value={currentValue}
      onChange={(event: React.SyntheticEvent, v) => {
        setCurrentValue(v);
        onChange(options[v].key);
      }}
      aria-label="basic tabs example"
      sx={sx}
    >
      {options.map((tab) => {
        return <Tab key={tab.key} label={tab.label} />;
      })}
    </Tabs>
  );
};

export default CustomTabs;
