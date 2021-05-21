import { Backdrop } from '@material-ui/core';
import { OptLoading } from '../OptLoading';
import * as S from './styles';

export type OptBackdropProps = {
  open: boolean;
};

export const OptBackdrop = ({ open }: S.Props) => {
  const classes = S.useStyles();
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <OptLoading color="secondary" size={60} />
    </Backdrop>
  );
};
