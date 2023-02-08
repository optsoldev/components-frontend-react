import { mdiApps, mdiBell, mdiCodeArray, mdiTuneVariant } from '@mdi/js';
import Icon from '@mdi/react';
import { IconButton } from '@mui/material';

export const AppbarActions = () => {
  return (
    <>
      <IconButton
        onClick={() => {
          console.log('something 1');
        }}
        size="large"
      >
        <Icon size={1} path={mdiCodeArray} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('something 2');
        }}
        size="large"
      >
        <Icon size={1} path={mdiTuneVariant} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('notifications');
        }}
        size="large"
      >
        <Icon size={1} path={mdiBell} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('modules');
        }}
        size="large"
      >
        <Icon size={1} path={mdiApps} />
      </IconButton>
    </>
  );
};
