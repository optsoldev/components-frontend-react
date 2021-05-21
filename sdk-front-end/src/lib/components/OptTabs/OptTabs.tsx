import { makeStyles } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import * as S from './styles';

const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    minHeight: '30px',
    height: '30px',
  },
  tabRoot: {
    minHeight: '24px',
    height: '24px',
  },
}));

interface Props {
  tab: number;
  onChange: (newTab: number) => void;
}

export const OptTabs = ({ tab, onChange, children }: PropsWithChildren<Props>) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    onChange(newValue);
  };

  return (
    <S.CustomTabAppBar>
      <S.CustomTabs
        classes={{
          root: classes.tabsRoot,
        }}
        value={tab}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="auto"
        TabIndicatorProps={{
          hidden: true,
        }}>
        {children}
      </S.CustomTabs>
    </S.CustomTabAppBar>
  );
};
