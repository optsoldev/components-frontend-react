import React from 'react';
import ReactDOM from 'react-dom';
import { OptTheme } from './lib';
import { OptLayoutProvider } from './lib/components/OptLayout/OptLayoutProvider';
import { ColorPalette } from './lib/shared/styles/colors';
import { AppSelector } from './pages/AppSelector';

const theme: OptTheme = {
  light: {
    style: 'soft',
    primary: ColorPalette.primary,
    primaryContrast: ColorPalette.white,
    secondary: ColorPalette.secondary,
    secondaryContrast: ColorPalette.white,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <OptLayoutProvider theme={theme}>
      <AppSelector />
    </OptLayoutProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
