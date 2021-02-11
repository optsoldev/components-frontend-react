import { IconButton, ListItem } from '@material-ui/core';
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

export const Titulo = styled.span`
  padding: 16px;
  font-size: 18px;
  line-height: 27px;
  color: ${({ color, theme }) => color ?? theme.color};
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
  color: ${(props) => props.color};
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

export const CustomListItem = styled(ListItem)`
  padding: 0;
  display: block;
`;

export const CreationButton = styled(IconButton)`
  border: 1px solid ${ColorPalette.gray5};
  border-radius: 8px;
  color: ${({ theme }) => theme.primary};
`;
