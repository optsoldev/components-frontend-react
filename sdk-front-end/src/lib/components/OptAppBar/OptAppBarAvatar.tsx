import { IconButton } from '@material-ui/core';
import React from 'react';
import { OptAvatar, OptUserProfile } from '../OptAvatar';
import { OptAppBarAvatarPopOver } from './OptAppBarAvatarPopOver';

interface Props {
  profile: OptUserProfile | undefined;
  onManageProfile: () => void;
  onLogout: () => void;
  fromSidebar?: boolean;
  size?: number;
}

export const OptAppBarAvatar = ({ profile, onManageProfile, onLogout, fromSidebar = false, size }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (profile) {
    // todo: para um cenário mais customizado, talvez seja interessante subir o elemento do handleClick e montar o objeto de menu fora da Opt
    return (
      <>
        <IconButton onClick={handleClick}>
          <OptAvatar profile={profile} size={size} />
        </IconButton>

        <OptAppBarAvatarPopOver
          anchorEl={anchorEl}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          profile={profile}
          fromSidebar={fromSidebar}
          open={open}
        />
      </>
    );
  }

  return <span>Não autenticado</span>;
};
