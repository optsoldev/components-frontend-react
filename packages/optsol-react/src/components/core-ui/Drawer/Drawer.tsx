import {
  Box,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps
} from '@mui/material';
import { PropsWithChildren } from 'react';
export type DrawerProps = MuiDrawerProps;

const Drawer = ({ children, ...props }: PropsWithChildren<DrawerProps>) => {
  const { PaperProps } = props;

  return (
    <MuiDrawer
      anchor="right"
      sx={{ zIndex: { xs: 1250 } }}
      PaperProps={{
        sx: { width: { xs: '85%', sm: '60%', md: '35%', lg: '30%' } },
        ...PaperProps
      }}
      {...props}
    >
      <Box display="flex" flexDirection="column" flex={1}>
        {children}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
