import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import { OptMenuSection } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import {
  ExpandedFooterActions,
  FooterActions,
  FooterActionsProps
} from './OptSideAppbarFooterActions/OptSideAppbarFooterActions';
import { SidebarExpandedListItem, SidebarExpandedListItemText } from './OptSideAppbarFooterActions/styles';
import * as S from './styles';

interface OptMainSidebarProps extends FooterActionsProps {
  sections: OptMenuSection[];
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

  const currentLinkColor = currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  function expandSidebar() {
    setExpanded(!expanded);
  }

  return (
    <S.SidebarMenuContainer expanded={expanded}>
      <S.CustomList>
        <S.ExpandableListItem button expanded={expanded} onClick={expandSidebar}>
          <Icon size={1} path={mdiMenu} color={currentLinkColor} />
        </S.ExpandableListItem>

        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <S.SidebarMenuDivider style={{ marginBottom: 6 }} />}

            {section.items.map((item, index) => {
              item.iconColor = item.iconColor ?? currentLinkColor;
              item.icon =
                typeof item.icon === 'string' ? <Icon size={1} path={item.icon} color={item.iconColor} /> : item.icon;

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
                    <S.SidebarListItem button>
                      <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                      {!hideLinkDescription && <S.SidebarListItemText primary={item.title} />}
                    </S.SidebarListItem>
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
        />
      ) : (
        <FooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          hideLinkDescription={hideLinkDescription}
          profile={profile}
        />
      )}
    </S.SidebarMenuContainer>
  );
};
