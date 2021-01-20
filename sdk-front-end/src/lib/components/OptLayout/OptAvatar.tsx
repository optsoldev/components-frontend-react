import { IconButton, MenuItem } from '@material-ui/core';
import { mdiAccountCog, mdiExitToApp } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { OptUserProfile } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { ColorPalette } from '../../shared/styles/colors';
import * as S from './styles';

interface Props {
  profile: OptUserProfile | undefined;
  onConfigurarPerfil: () => void;
  onLogout: () => void;
}

export const OptAvatar = ({ profile, onConfigurarPerfil, onLogout }: Props) => {
  const { currentTheme } = useOptTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'avatar' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (profile) {
    let initials = '-';
    const trimmedName = profile.name.trim();

    if (trimmedName.length > 0) {
      const splittedName = trimmedName.split(' ');

      // eslint-disable-next-line prefer-destructuring
      initials = splittedName[0][0];

      if (splittedName.length > 1) {
        initials += splittedName[splittedName.length - 1][0];
      }
    }

    // todo: para um cenário mais customizado, talvez seja interessante subir o elemento do handleClick e montar o objeto de menu fora da Opt
    return (
      <>
        <IconButton aria-describedby={id} onClick={handleClick}>
          <S.CustomAvatar alt={profile.name} src={profile.avatarSrc} alternativecolor={profile.alternativeColor}>
            {!profile.avatarSrc && initials.toUpperCase()}
          </S.CustomAvatar>
        </IconButton>
        <S.AvatarPopOver
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClick}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <S.MenuAvatarContainer>
            <S.MenuAvatar
              alt={profile.name}
              src={profile.avatarSrc}
              style={{ width: 60, height: 60 }}
              alternativecolor={profile.alternativeColor}>
              {!profile.avatarSrc && initials.toUpperCase()}
            </S.MenuAvatar>
          </S.MenuAvatarContainer>

          <S.UserNameContainer>{profile.name}</S.UserNameContainer>
          <S.UserEmailContainer>{profile.email}</S.UserEmailContainer>

          <S.CustomMenuList>
            <MenuItem onClick={onConfigurarPerfil}>
              <Icon size={1} path={mdiAccountCog} color={currentTheme.appBar.background} />
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
