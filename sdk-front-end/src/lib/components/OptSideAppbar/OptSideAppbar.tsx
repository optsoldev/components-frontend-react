import { Tooltip } from '@material-ui/core';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import { OptMenuSection } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptUserProfile } from '../OptAvatar';
import {
  ExpandedFooterActions,
  FooterActions,
  OptMainSidebarFooterAction,
} from './OptSideAppbarFooterActions/OptSideAppbarFooterActions';
import { SidebarExpandedListItem, SidebarExpandedListItemText } from './OptSideAppbarFooterActions/styles';
import * as S from './styles';

interface OptMainSidebarProps {
  sections: OptMenuSection[];

  footerActions?: OptMainSidebarFooterAction[];
  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  hideLinkDescription?: boolean;
}

export const OptSideAppbar = ({
  sections,
  hideLinkDescription = false,
  profile,
  onManageProfile,
  onLogout,
  footerActions,
}: OptMainSidebarProps) => {
  const { currentTheme } = useOptTheme();
  const [expanded, setExpanded] = useState(false);
  const { setCurrentSideAppbarWidth } = useOptTheme();

  const currentLinkColor = currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  function toggleExpandSidebar() {
    setExpanded(!expanded);
    setCurrentSideAppbarWidth(expanded ? S.sideAppbarWidth : S.expandedSideAppbarWidth);
  }

  return (
    <S.SidebarMenuContainer expanded={expanded}>
      <S.CustomList>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <S.SidebarMenuDivider style={{ marginBottom: 6 }} />}

            {section.items.map((item, index) => {
              item.iconColor = item.iconColor ?? currentLinkColor;
              item.icon =
                typeof item.icon === 'string' ? <Icon size={1.2} path={item.icon} color={item.iconColor} /> : item.icon;

              return (
                <S.SidebarNavLink
                  to={item.path}
                  activeClassName={S.activeLinkClass}
                  exact={item.activeShouldBeExact}
                  key={index}>
                  {expanded && (
                    <SidebarExpandedListItem button>
                      <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                      {<SidebarExpandedListItemText primary={item.title} />}
                    </SidebarExpandedListItem>
                  )}

                  {!expanded && (
                    <Tooltip title={item.title} placement="right">
                      <S.SidebarListItem button>
                        <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                        {!hideLinkDescription && <S.SidebarListItemText primary={item.title} />}
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
          hideLinkDescription={hideLinkDescription}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
        />
      ) : (
        <FooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          hideLinkDescription={hideLinkDescription}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
        />
      )}
    </S.SidebarMenuContainer>
  );
};
