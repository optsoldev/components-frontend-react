import { IconButton } from '@material-ui/core';
import { mdiBell, mdiApps, mdiCodeArray, mdiTuneVariant } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

export const AppbarActions = () => {
  return (
    <>
      <IconButton
        onClick={() => {
          console.log('something 1');
        }}>
        <Icon size={1} path={mdiCodeArray} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('something 2');
        }}>
        <Icon size={1} path={mdiTuneVariant} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('notifications');
        }}>
        <Icon size={1} path={mdiBell} />
      </IconButton>

      <IconButton
        onClick={() => {
          console.log('modules');
        }}>
        <Icon size={1} path={mdiApps} />
      </IconButton>
    </>
  );
};
