import { responsiveFontSizes, ThemeProvider } from '@mui/material';

import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationProvider } from './authentication/authenticationContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { UserProvider } from './contexts/User.context';
import { muiTheme } from './shared/theme';


const AppProviders = ({ children }: PropsWithChildren) => {
  return (
      <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
        <ErrorBoundary>
          <BrowserRouter>
            <AuthenticationProvider>
              <UserProvider>{children}</UserProvider>
            </AuthenticationProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
  );
};

export default AppProviders;
