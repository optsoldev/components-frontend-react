import React from 'react';
import ReactDOM from 'react-dom';
import { OptLayoutProvider } from './lib/components/OptLayout/OptLayoutProvider';
import { AppSelector } from './pages/AppSelector';

ReactDOM.render(
  <React.StrictMode>
    <OptLayoutProvider>
      <AppSelector />
    </OptLayoutProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
