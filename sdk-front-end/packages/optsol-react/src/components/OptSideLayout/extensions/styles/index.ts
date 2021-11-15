import { IconButton, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ActiveLinkClass } from '../../../../shared/constants';
import { ColorPalette } from '../../../../shared/styles/colors';
import { OptChip } from '../../../OptChip';

export const MainContainer = styled.div`
  display: block;
  color: ${ColorPalette.gray3};

  & > h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${ColorPalette.gray2};
  }

  & > ${OptChip} {
    margin: 8px 0;
  }

  & > p {
    text-align: justify;
  }
`;
export interface HeaderProps {
  color?: string;
  background?: string;
}

export const Header = styled.div<HeaderProps>`
  padding: 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ color, theme }) => color ?? theme.toolbar?.color};
  background: ${({ background, theme }) => background ?? theme.toolbar?.background};
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const CustomSidebarNavLink = styled(NavLink)`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${({ color }) => color ?? ColorPalette.gray2};
  padding: 20px 16px;

  &.${ActiveLinkClass} {
    background-color: ${ColorPalette.white};
    color: ${({ theme }) => theme.primary} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.primary} !important;
      fill: ${({ theme }) => theme.primary} !important;
    }
  }
`;

export const CustomListItem = styled<any>(ListItem)`
  padding: 0;
  display: block;
`;

export interface CreationButtonProps {
  customcolor?: string;
}

export const CreationButton = styled(IconButton)<CreationButtonProps>`
  border: 1px solid ${({ theme }) => theme.appBar.side?.divider && theme.appBar.color};
  border-radius: 8px;
  color: ${({ customcolor, theme }) => customcolor ?? theme.primary};
`;
