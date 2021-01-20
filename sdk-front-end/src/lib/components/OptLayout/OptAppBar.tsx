import { createStyles, makeStyles, Theme as MaterialTheme, Toolbar } from '@material-ui/core';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { OptAvatar, OptUserProfile } from '.';
import { OptBreadcrumb } from '../OptBreadcrumb/OptBreadcrumb';
import * as S from './styles';

const useStyles = makeStyles((theme: MaterialTheme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  }),
);

interface Props {
  profile: OptUserProfile | undefined;
  onConfigurarPerfil: () => void;
  onLogout: () => void;
  onDrawerOpen: () => void;
  hideBreadcrumb?: boolean;
  hideDrawerButton?: boolean;
  content?: JSX.Element;
  actions?: JSX.Element;
}

export const OptAppBar = ({
  profile,
  onConfigurarPerfil,
  onLogout,
  onDrawerOpen,
  hideDrawerButton,
  hideBreadcrumb,
  content,
  actions,
}: Props) => {
  const classes = useStyles();

  return (
    <S.CustomAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {!hideDrawerButton && (
          <S.AppBarDrawerButtonContainer>
            <S.AppBarDrawerButton aria-label="open drawer" onClick={onDrawerOpen} edge="start">
              <Icon size={1} path={mdiMenu} />
            </S.AppBarDrawerButton>
          </S.AppBarDrawerButtonContainer>
        )}

        <S.AppBarContainer marginLeft={hideDrawerButton}>
          {!hideBreadcrumb && <OptBreadcrumb />}
          {content}
        </S.AppBarContainer>

        <S.AppBarEndContainer>
          {actions}

          <OptAvatar profile={profile} onConfigurarPerfil={onConfigurarPerfil} onLogout={onLogout} />
        </S.AppBarEndContainer>
      </Toolbar>
    </S.CustomAppBar>
  );
};
