import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { Theme as MaterialTheme, Toolbar } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { OptUserProfile } from '../OptAvatar';
import { OptBreadcrumb } from '../OptBreadcrumb/OptBreadcrumb';
import { OptAppBarAvatar } from './OptAppBarAvatar';
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

export interface OptAppBarProps {
  profile: OptUserProfile | undefined;
  onManageProfile: () => void;
  onLogout: () => void;
  onDrawerOpen: () => void;
  hideBreadcrumb?: boolean;
  hideDrawerButton?: boolean;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export const OptAppBar = ({
  profile,
  onManageProfile,
  onLogout,
  onDrawerOpen,
  hideDrawerButton,
  hideBreadcrumb,
  content,
  actions,
}: OptAppBarProps) => {
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

          <OptAppBarAvatar profile={profile} onManageProfile={onManageProfile} onLogout={onLogout} />
        </S.AppBarEndContainer>
      </Toolbar>
    </S.CustomAppBar>
  );
};
