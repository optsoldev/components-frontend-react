import { createStyles, makeStyles, Theme } from '@material-ui/core';

export interface Props {
  open: boolean;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);
