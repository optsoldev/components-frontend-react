import { Backdrop, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { OptLoading } from '../OptLoading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

interface Props {
  open: boolean;
}

export const OptBackdrop = ({ open }: Props) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <OptLoading color="secondary" size={60} />
    </Backdrop>
  );
};
