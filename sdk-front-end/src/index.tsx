import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { OptTheme } from './shared/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends OptTheme {}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
