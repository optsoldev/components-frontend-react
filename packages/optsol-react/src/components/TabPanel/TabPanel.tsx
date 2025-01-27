import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

interface TabPanelProps<T> {
  index: string;
  value: T;
}

export function TabPanel<T>(
  props: Readonly<PropsWithChildren<TabPanelProps<T>>>
) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}
