import { OptLayoutProvider, OptTheme } from '@optsol/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppSelector } from './pages/AppSelector';
import { ColorPalette } from './shared/colors';

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
