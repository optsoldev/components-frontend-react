import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ptBR } from 'date-fns/locale/pt-BR';
import { PropsWithChildren } from 'react';

import { ErrorBoundary } from './components/ErrorBoundary';
import { muiTheme } from './shared/theme';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      <ErrorBoundary>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          {children}
        </LocalizationProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default AppProviders;
