import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../../shared/styles/theme';

export const BreadcrumbContainer = styled.div`
  & svg {
    vertical-align: middle;
    margin: 0px 2px 2px 2px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BreadcrumbNavLink = styled(NavLink)`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.breadcrumb.color};
  text-decoration: none;

  transition: color ease-in-out 250ms;

  &:hover {
    color: ${({ theme }) => theme.breadcrumb.hover};
  }
`;
