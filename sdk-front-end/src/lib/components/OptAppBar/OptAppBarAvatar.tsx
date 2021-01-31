import { IconButton, MenuItem } from '@material-ui/core';
import { mdiAccountCog, mdiExitToApp } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { ColorPalette } from '../../shared/styles/colors';
import { OptAvatar, OptUserProfile } from '../OptAvatar';
import * as S from './styles';

interface Props {
  profile: OptUserProfile | undefined;
  onManageProfile: () => void;
  onLogout: () => void;
  fromSidebar?: boolean;
}

export const OptAppBarAvatar = ({ profile, onManageProfile, onLogout, fromSidebar = false }: Props) => {
  const { currentTheme } = useOptTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'avatar' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (profile) {
    // todo: para um cenário mais customizado, talvez seja interessante subir o elemento do handleClick e montar o objeto de menu fora da Opt
    return (
      <>
        <IconButton onClick={handleClick}>
          <OptAvatar profile={profile} />
        </IconButton>

        <S.AvatarPopOver
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClick}
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
      </>
    );
  }

  return <span>Não autenticado</span>;
};
