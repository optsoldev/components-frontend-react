import { createStyles, IconButton, makeStyles, Theme as MaterialTheme, Toolbar } from '@material-ui/core';
import { mdiApps, mdiBell, mdiMenu } from '@mdi/js';
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
  onNotificationsClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onModulesClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDrawerOpen: () => void;
  hideDrawerButton?: boolean;
}

export const OptAppBar = ({
  onModulesClick,
  profile,
  onNotificationsClick,
  onConfigurarPerfil,
  onLogout,
  onDrawerOpen,
  hideDrawerButton,
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

        <S.AppbarBreadcrumb marginLeft={hideDrawerButton}>
          <OptBreadcrumb />
        </S.AppbarBreadcrumb>

        <S.AppBarEndContainer>
          <IconButton onClick={onNotificationsClick}>
            <Icon size={1} path={mdiBell} />
          </IconButton>

          <IconButton onClick={onModulesClick}>
            <Icon size={1} path={mdiApps} />
          </IconButton>

          <OptAvatar profile={profile} onConfigurarPerfil={onConfigurarPerfil} onLogout={onLogout} />
        </S.AppBarEndContainer>
      </Toolbar>
    </S.CustomAppBar>
  );
};
