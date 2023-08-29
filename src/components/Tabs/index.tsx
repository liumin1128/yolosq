import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';

interface TabItem {
  label: string;
  key: string;
}

interface Props {
  options: TabItem[];
  onChange: (key: string) => void;
  value?: string;
}

const CustomTabs = (props: Props) => {
  const { options, value = 0, onChange } = props;
  const [currentValue, setCurrentValue] = React.useState(value);
  return (
    <Card>
      <Tabs
        value={currentValue}
        onChange={(event: React.SyntheticEvent, v) => {
          setCurrentValue(v);
          onChange(options[v].key);
        }}
        aria-label="basic tabs example"
      >
        {options.map((tab) => {
          return <Tab key={tab.key} label={tab.label} />;
        })}
      </Tabs>
    </Card>
  );
};

export default CustomTabs;
