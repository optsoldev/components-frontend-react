import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { OptLayoutProvider } from './lib/components/OptLayout/OptLayoutProvider';

ReactDOM.render(
  <React.StrictMode>
    <OptLayoutProvider>
      <App />
    </OptLayoutProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
