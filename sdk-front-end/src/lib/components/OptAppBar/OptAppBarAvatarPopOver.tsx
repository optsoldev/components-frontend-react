import { MenuItem } from '@material-ui/core';
import { mdiAccountCog, mdiExitToApp } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { ColorPalette } from '../../shared/styles/colors';
import { OptAvatar, OptUserProfile } from '../OptAvatar';
import * as S from './styles';

interface Props {
  profile: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  fromSidebar?: boolean;
  open?: boolean;
  anchorEl: HTMLElement | null;
}

export const OptAppBarAvatarPopOver = ({
  profile,
  onManageProfile,
  onLogout,
  anchorEl,
  fromSidebar = false,
  open = false,
}: Props) => {
  const { currentTheme } = useOptTheme();
  const id = open ? 'avatar' : undefined;

  return (
    <S.AvatarPopOver
      anchorEl={anchorEl}
      id={id}
      open={open}
      anchorOrigin={{
        vertical: fromSidebar ? 'top' : 'bottom',
        horizontal: fromSidebar ? 'right' : 'center',
      }}
      transformOrigin={{
        vertical: fromSidebar ? 'center' : 'top',
        horizontal: fromSidebar ? 'left' : 'center',
      }}>
      <S.MenuAvatarContainer>
        <OptAvatar size={60} profile={profile} />
      </S.MenuAvatarContainer>

      <S.UserNameContainer>{profile.name}</S.UserNameContainer>
      <S.UserEmailContainer>{profile.email}</S.UserEmailContainer>

      <S.CustomMenuList>
        <MenuItem onClick={onManageProfile}>
          <Icon size={1} path={mdiAccountCog} color={currentTheme.appBar.avatar.background} />
          Configurar perfil
        </MenuItem>

        <MenuItem style={{ color: ColorPalette.ketchup }} onClick={onLogout}>
          <Icon size={1} path={mdiExitToApp} />
          Logout
        </MenuItem>
      </S.CustomMenuList>
    </S.AvatarPopOver>
  );
};
