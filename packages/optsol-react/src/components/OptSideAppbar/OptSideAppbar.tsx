import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptAppLogo, OptMenuSection } from '../../types';
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
  logo?: OptAppLogo;
  sections: OptMenuSection[];

  expandable?: boolean;
  footerActions?: OptMainSidebarFooterAction[];
  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  hideLinkDescription?: boolean;
  sideAppbarWidth?: number;
  expandedSideAppbarWidth?: number;
  sectionsAlignment?: 'start' | 'center' | 'end';
}

export function OptSideAppbar({
  logo,
  sections,
  profile,
  expandable = false,
  footerActions,
  hideLinkDescription = false,
  onLogout,
  onManageProfile,
  sideAppbarWidth = 50,
  expandedSideAppbarWidth = 300,
  sectionsAlignment = 'start',
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
      {logo && (
        <>
          <S.SidebarNavLink
            to={logo.path ?? '/'}
            style={{
              marginTop: -9,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 65,
            }}
          >
            <S.SidebarListItem button>
              <S.SidebarListItemIcon>
                {typeof logo.icon === 'string' ? (
                  <Icon
                    size={1.5}
                    path={logo.icon}
                    color={logo.iconColor ?? currentLinkColor}
                  />
                ) : (
                  logo.icon
                )}
              </S.SidebarListItemIcon>
            </S.SidebarListItem>
          </S.SidebarNavLink>
          <S.SidebarMenuDivider />
        </>
      )}
      <S.CustomList $align={sectionsAlignment}>
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
                  key={index}
                  end={item.activeShouldBeExact}
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
          expandable={expandable}
        />
      )}
    </S.SidebarMenuContainer>
  );
}
