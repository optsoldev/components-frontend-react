import React from 'react';
import ReactDOM from 'react-dom';
import { OptLayoutProvider } from './lib/components/OptLayout/OptLayoutProvider';
import { AppSide } from './pages/AppSide/AppSide';

ReactDOM.render(
  <React.StrictMode>
    <OptLayoutProvider>
      {/* <App /> */}
      <AppSide />
    </OptLayoutProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
