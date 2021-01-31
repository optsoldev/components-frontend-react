import Icon from '@mdi/react';
import React from 'react';
import { OptMenuSection } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptUserProfile } from '../OptAvatar';
import { OptAppBarAvatar } from '../OptLayout';
import * as S from './styles';

interface OptMainSidebarMenuProps {
  sections: OptMenuSection[];

  noLinkDescription?: boolean;

  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;

  footerActions?: React.ReactNode;
}

export const OptSideAppbar = ({
  sections,
  noLinkDescription = false,
  profile,
  onManageProfile,
  onLogout,
  footerActions,
}: OptMainSidebarMenuProps) => {
  const { currentTheme } = useOptTheme();

  const actions = (
    <>
      {footerActions}

      {profile && (
        <OptAppBarAvatar profile={profile} onLogout={onLogout} onManageProfile={onManageProfile} fromSidebar />
      )}
    </>
  );

  return (
    <S.SidebarMenuContainer>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <S.SidebarMenuDivider />}

          <S.CustomList>
            {section.items.map((item, index) => {
              item.iconColor = item.iconColor ?? currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;
              item.icon =
                typeof item.icon === 'string' ? <Icon size={1} path={item.icon} color={item.iconColor} /> : item.icon;

              return (
                <S.SidebarNavLink
                  to={item.path}
                  activeClassName={S.activeLinkClass}
                  exact={item.activeShouldBeExact}
                  key={index}>
                  <S.SidebarListItem button>
                    <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                    {!noLinkDescription && <S.SidebarListItemText primary={item.title} />}
                  </S.SidebarListItem>
                </S.SidebarNavLink>
              );
            })}
          </S.CustomList>
        </React.Fragment>
      ))}

      <S.FooterActionsContainer>{actions}</S.FooterActionsContainer>
    </S.SidebarMenuContainer>
  );
};
