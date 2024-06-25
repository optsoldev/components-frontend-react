import { responsiveFontSizes, ThemeProvider } from '@mui/material';

import { PropsWithChildren } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { muiTheme } from './shared/theme';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
};

export default AppProviders;
