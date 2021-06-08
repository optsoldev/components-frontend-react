import React from 'react';
import ReactDOM from 'react-dom';
import { OptLayoutProvider } from './lib/components/OptLayout/OptLayoutProvider';
import { CustomOptTheme } from './lib/contexts/theme/themeState';
import { ColorPalette } from './lib/shared/styles/colors';
import { AppSelector } from './pages/AppSelector';

const theme: CustomOptTheme = {
  light: {
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
