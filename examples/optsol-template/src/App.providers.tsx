import { responsiveFontSizes, ThemeProvider } from '@mui/material';

import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { muiTheme } from './shared/theme';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      <ErrorBoundary>
        <BrowserRouter>{children}</BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default AppProviders;
