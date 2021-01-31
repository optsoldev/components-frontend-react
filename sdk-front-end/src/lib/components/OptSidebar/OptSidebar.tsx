import Icon from '@mdi/react';
import React from 'react';
import { OptMenuSection } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

export interface OptSidebarMenuProps {
  sections: OptMenuSection[];

  noLinkDescription?: boolean;

  footerActions?: React.ReactNode;
}

export const OptSidebar = ({ sections, footerActions }: OptSidebarMenuProps) => {
  const { currentTheme } = useOptTheme();

  return (
    <S.SidebarMenuContainer>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <S.SidebarMenuDivider />}

          <S.CustomList>
            {section.items.map((item, index) => {
              item.iconColor = item.iconColor ?? currentTheme.sidebar.link.color;
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
                    <S.SidebarListItemText primary={item.title} />
                  </S.SidebarListItem>
                </S.SidebarNavLink>
              );
            })}
          </S.CustomList>
        </React.Fragment>
      ))}

      <S.FooterActionsContainer>{footerActions}</S.FooterActionsContainer>
    </S.SidebarMenuContainer>
  );
};
