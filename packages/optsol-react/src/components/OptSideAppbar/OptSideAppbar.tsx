import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptMenuSection } from '../../types';
import { OptUserProfile } from '../OptAvatar';
import {
  ExpandedFooterActions,
  FooterActions,
  OptMainSidebarFooterAction,
} from './OptSideAppbarFooterActions/OptSideAppbarFooterActions';
import {
  SidebarExpandedListItem,
  SidebarExpandedListItemText,
} from './OptSideAppbarFooterActions/styles';
import * as S from './styles';

interface OptMainSidebarProps {
  sections: OptMenuSection[];

  footerActions?: OptMainSidebarFooterAction[];
  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  hideLinkDescription?: boolean;
  sideAppbarWidth?: number;
  expandedSideAppbarWidth?: number;
}

export function OptSideAppbar({
  sections,
  profile,
  footerActions,
  hideLinkDescription = false,
  onLogout,
  onManageProfile,
  sideAppbarWidth = 50,
  expandedSideAppbarWidth = 300,
}: OptMainSidebarProps) {
  const { currentTheme } = useOptTheme();
  const [expanded, setExpanded] = useState(false);
  const { setCurrentSideAppbarWidth } = useOptTheme();

  const currentLinkColor =
    currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  const toggleExpandSidebar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const width = expanded ? expandedSideAppbarWidth : sideAppbarWidth;
    setCurrentSideAppbarWidth(width);
  }, [
    expanded,
    expandedSideAppbarWidth,
    setCurrentSideAppbarWidth,
    sideAppbarWidth,
  ]);

  return (
    <S.SidebarMenuContainer
      $expanded={expanded}
      $sideAppbarWidth={sideAppbarWidth}
      $expandedSideAppbarWidth={expandedSideAppbarWidth}
    >
      <S.CustomList>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <S.SidebarMenuDivider style={{ marginBottom: 6 }} />}

            {section.items.map((item, index) => {
              const color = item.iconColor ?? currentLinkColor;
              const icon =
                typeof item.icon === 'string' ? (
                  <Icon size={1.2} path={item.icon} color={color} />
                ) : (
                  item.icon
                );

              return (
                <S.SidebarNavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? S.activeLinkClass : ''
                  }
                  end={item.activeShouldBeExact}
                  key={index}
                >
                  {expanded && (
                    <SidebarExpandedListItem button>
                      <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                      <SidebarExpandedListItemText primary={item.title} />
                    </SidebarExpandedListItem>
                  )}

                  {!expanded && (
                    <Tooltip title={item.title} placement="right">
                      <S.SidebarListItem button>
                        <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                        {!hideLinkDescription && (
                          <S.SidebarListItemText primary={item.title} />
                        )}
                      </S.SidebarListItem>
                    </Tooltip>
                  )}
                </S.SidebarNavLink>
              );
            })}
          </React.Fragment>
        ))}
      </S.CustomList>

      {expanded ? (
        <ExpandedFooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
        />
      ) : (
        <FooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
        />
      )}
    </S.SidebarMenuContainer>
  );
}
