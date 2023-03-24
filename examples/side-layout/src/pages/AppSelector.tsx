import { Button } from '@mui/material';
import { useState } from 'react';

import App from './App/App';
import { AppSide } from './AppSide/AppSide';
import { SideAppSample } from './SideAppSample/SideAppSample';

export const AppSelector = () => {
  const [page, setPage] = useState<number>();

  return (
    <>
      {page === undefined && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(0)}
          >
            App padrão
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(1)}
          >
            App horizontal (testes)
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(2)}
          >
            APP HORIZONTAL SAMPLE
          </Button>
        </div>
      )}

      {page === 0 && <App />}
      {page === 1 && <AppSide />}
      {page === 2 && <SideAppSample />}
    </>
  );
};
