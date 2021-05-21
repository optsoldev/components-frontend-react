import { makeStyles } from '@material-ui/core';
import React from 'react';
import * as S from './styles';

const useStyles = makeStyles((theme) => ({
  tabRoot: {
    minHeight: '24px',
    height: '24px',
  },
}));

interface Props {
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | 'secondary' | 'primary' | 'inherit';
  value?: any;
  wrapped?: boolean;
  tabIndex: number;
}

export const OptTab = React.forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  const classes = useStyles();

  return (
    <S.CustomTab
      classes={{
        root: classes.tabRoot,
      }}
      ref={ref}
      {...props}
    />
  );
});
