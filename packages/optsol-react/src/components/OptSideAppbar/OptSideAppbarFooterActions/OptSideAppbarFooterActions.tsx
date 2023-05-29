import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Badge, BadgeProps, IconButton, Tooltip, styled } from '@mui/material';
import React from 'react';

import { ColorPalette } from 'packages/optsol-react/src/shared/styles/colors';

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
  qtdNotifications?: number;
  onClick: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface FooterActionsProps {
  expandable?: boolean;
  footerActions?: OptMainSidebarFooterAction[];
  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  toggleSidebar: () => void;
}

export function FooterActions({
  expandable = false,
  footerActions,
  profile,
  onLogout,
  onManageProfile,
  toggleSidebar: expandSidebar,
}: FooterActionsProps) {
  const { currentTheme } = useOptTheme();
  const currentLinkColor =
    currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: 4,
      border: `none`,
      padding: '0 4px',
      backgroundColor: ColorPalette.red1,
      color: 'white',
    },
  }));

  return (
    <S.FooterActionsContainer>
      {footerActions?.map((action, index) => {
        const { qtdNotifications = 0 } = action;
        const color = action.iconColor ?? currentTheme.appBar.side!.link.color;
        const icon =
          typeof action.icon === 'string' ? (
            <Icon size={1.2} path={action.icon} color={color} />
          ) : (
            action.icon
          );

        if (qtdNotifications > 0) {
          return (
            <Tooltip title={action.title} placement="right" key={index}>
              <IconButton onClick={action.onClick} size="large">
                <StyledBadge badgeContent={qtdNotifications} color="secondary">
                  {icon}
                </StyledBadge>
              </IconButton>
            </Tooltip>
          );
        } else {
          return (
            <Tooltip title={action.title} placement="right" key={index}>
              <IconButton onClick={action.onClick} size="large">
                {icon}
              </IconButton>
            </Tooltip>
          );
        }
      })}

      <OptAppBarAvatar
        profile={profile}
        onLogout={onLogout}
        onManageProfile={onManageProfile}
        fromSidebar
      />
      {expandable && (
        <Tooltip title="Expandir" placement="right">
          <IconButton onClick={expandSidebar} size="large">
            <Icon
              size={1.2}
              path={mdiChevronDoubleRight}
              color={currentLinkColor}
            />
          </IconButton>
        </Tooltip>
      )}
    </S.FooterActionsContainer>
  );
}

export function ExpandedFooterActions({
  footerActions,
  profile,
  onLogout,
  onManageProfile,
  toggleSidebar: collapseSidebar,
}: Omit<FooterActionsProps, 'expandalble'>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentTheme } = useOptTheme();
  const currentLinkColor =
    currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  const open = Boolean(anchorEl);

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <S.ExpandedFooterActionsContainer>
      <S.CustomList>
        {footerActions?.map((action, index) => {
          const color =
            action.iconColor ?? currentTheme.appBar.side!.link.color;
          const icon =
            typeof action.icon === 'string' ? (
              <Icon size={1} path={action.icon} color={color} />
            ) : (
              action.icon
            );

          return (
            <S.SidebarExpandedListItem
              button
              onClick={action.onClick}
              key={index}
            >
              <SidebarListItemIcon>{icon}</SidebarListItemIcon>
              <S.SidebarExpandedListItemText primary={action.title} />
            </S.SidebarExpandedListItem>
          );
        })}

        {profile && (
          <>
            <S.SidebarMenuDivider style={{ margin: '6px 0' }} />
            <div style={{ display: 'flex', width: '100%' }}>
              <S.SidebarExpandedListItem
                button
                onClick={handleClickAvatar}
                style={{ flex: 1 }}
              >
                <OptAvatar profile={profile} />

                <OptAppBarAvatarPopOver
                  anchorEl={anchorEl}
                  onLogout={onLogout}
                  onManageProfile={onManageProfile}
                  profile={profile}
                  open={open}
                  fromSidebar
                />

                <S.SidebarExpandedListItemText
                  primary={profile.name.replace(/ .*/, '')}
                />

                <Tooltip title="Contrair" placement="right">
                  <IconButton onClick={collapseSidebar} size="large">
                    <Icon
                      size={1.2}
                      path={mdiChevronDoubleLeft}
                      color={currentLinkColor}
                    />
                  </IconButton>
                </Tooltip>
              </S.SidebarExpandedListItem>
            </div>
          </>
        )}
      </S.CustomList>
    </S.ExpandedFooterActionsContainer>
  );
}
