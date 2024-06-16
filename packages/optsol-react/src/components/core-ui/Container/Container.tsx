import { Container as MuiContainer } from '@mui/material';
import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <MuiContainer maxWidth="lg" component="main" sx={{ p: 3 }}>
      {children}
    </MuiContainer>
  );
};

export default Container;
