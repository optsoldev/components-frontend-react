import { IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import React from 'react';
import { useOptTheme } from '../../../contexts/theme/themeContext';
import { OptAppBarAvatarPopOver } from '../../OptAppBar/OptAppBarAvatarPopOver';
import { OptAvatar, OptUserProfile } from '../../OptAvatar';
import { OptAppBarAvatar } from '../../OptLayout';
import { SidebarListItemIcon } from '../styles';
import * as S from './styles';

export interface OptMainSidebarFooterAction {
  /** Must be an @mdi/js path or a ReactNode */
  icon: string | React.ReactNode;
  iconColor?: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void;
}

export interface FooterActionsProps {
  footerActions?: OptMainSidebarFooterAction[];

  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  hideLinkDescription?: boolean;
}

export const FooterActions = ({ footerActions, profile, onLogout, onManageProfile }: FooterActionsProps) => {
  const { currentTheme } = useOptTheme();

  return (
    <S.FooterActionsContainer>
      {footerActions?.map((action) => {
        action.iconColor = action.iconColor ?? currentTheme.appBar.side!.link.color;
        action.icon =
          typeof action.icon === 'string' ? (
            <Icon size={1} path={action.icon} color={action.iconColor ?? currentTheme.appBar.side!.link.color} />
          ) : (
            action.icon
          );

        return <IconButton onClick={action.onClick}>{action.icon}</IconButton>;
      })}

      {profile && (
        <OptAppBarAvatar profile={profile} onLogout={onLogout} onManageProfile={onManageProfile} fromSidebar />
      )}
    </S.FooterActionsContainer>
  );
};

export const ExpandedFooterActions = ({ footerActions, profile, onLogout, onManageProfile }: FooterActionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentTheme } = useOptTheme();
  const open = Boolean(anchorEl);

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <S.ExpandedFooterActionsContainer>
      <S.CustomList>
        {footerActions?.map((action) => {
          action.iconColor = action.iconColor ?? currentTheme.appBar.side!.link.color;
          action.icon =
            typeof action.icon === 'string' ? (
              <Icon size={1} path={action.icon} color={action.iconColor ?? currentTheme.appBar.side!.link.color} />
            ) : (
              action.icon
            );

          return (
            <S.SidebarExpandedListItem button onClick={action.onClick}>
              <SidebarListItemIcon>{action.icon}</SidebarListItemIcon>
              <S.SidebarExpandedListItemText primary={action.title} />
            </S.SidebarExpandedListItem>
          );
        })}

        {profile && (
          <>
            <S.SidebarMenuDivider style={{ margin: '6px 0' }} />
            <S.SidebarExpandedListItem button onClick={handleClickAvatar}>
              <OptAvatar profile={profile} size={20} />

              <OptAppBarAvatarPopOver
                anchorEl={anchorEl}
                onLogout={onLogout}
                onManageProfile={onManageProfile}
                profile={profile}
                open={open}
                fromSidebar
              />

              <S.SidebarExpandedListItemText primary={profile.name} />
            </S.SidebarExpandedListItem>
          </>
        )}
      </S.CustomList>
    </S.ExpandedFooterActionsContainer>
  );
};
