import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js';
import Icon from '@mdi/react';
import { IconButton, Tooltip } from '@mui/material';
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
  toggleSidebar: () => void;
  hideLinkDescription?: boolean;
}

export const FooterActions = ({
  footerActions,
  profile,
  onLogout,
  onManageProfile,
  toggleSidebar: expandSidebar,
}: FooterActionsProps) => {
  const { currentTheme } = useOptTheme();
  const currentLinkColor = currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  return (
    <S.FooterActionsContainer>
      {footerActions?.map((action, index) => {
        action.iconColor = action.iconColor ?? currentTheme.appBar.side!.link.color;
        action.icon =
          typeof action.icon === 'string' ? (
            <Icon size={1.2} path={action.icon} color={action.iconColor ?? currentTheme.appBar.side!.link.color} />
          ) : (
            action.icon
          );

        return (
          <Tooltip title={action.title} placement="right" key={index}>
            <IconButton onClick={action.onClick} size="large">{action.icon}</IconButton>
          </Tooltip>
        );
      })}

      <OptAppBarAvatar profile={profile} onLogout={onLogout} onManageProfile={onManageProfile} fromSidebar />

      <Tooltip title="Expandir" placement="right">
        <IconButton onClick={expandSidebar} size="large">
          <Icon size={1.2} path={mdiChevronDoubleRight} color={currentLinkColor} />
        </IconButton>
      </Tooltip>
    </S.FooterActionsContainer>
  );
};

export const ExpandedFooterActions = ({
  footerActions,
  profile,
  onLogout,
  onManageProfile,
  toggleSidebar: collapseSidebar,
}: FooterActionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentTheme } = useOptTheme();
  const currentLinkColor = currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  const open = Boolean(anchorEl);

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <S.ExpandedFooterActionsContainer>
      <S.CustomList>
        {footerActions?.map((action, index) => {
          action.iconColor = action.iconColor ?? currentTheme.appBar.side!.link.color;
          action.icon =
            typeof action.icon === 'string' ? (
              <Icon size={1} path={action.icon} color={action.iconColor ?? currentTheme.appBar.side!.link.color} />
            ) : (
              action.icon
            );

          return (
            <S.SidebarExpandedListItem button onClick={action.onClick} key={index}>
              <SidebarListItemIcon>{action.icon}</SidebarListItemIcon>
              <S.SidebarExpandedListItemText primary={action.title} />
            </S.SidebarExpandedListItem>
          );
        })}

        {profile && (
          <React.Fragment>
            <S.SidebarMenuDivider style={{ margin: '6px 0' }} />
            <div style={{ display: 'flex' }}>
              <S.SidebarExpandedListItem button onClick={handleClickAvatar} style={{ flex: 1 }}>
                <OptAvatar profile={profile} />

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

              <Tooltip title="Contrair" placement="right">
                <IconButton onClick={collapseSidebar} size="large">
                  <Icon size={1.2} path={mdiChevronDoubleLeft} color={currentLinkColor} />
                </IconButton>
              </Tooltip>
            </div>
          </React.Fragment>
        )}
      </S.CustomList>
    </S.ExpandedFooterActionsContainer>
  );
};
