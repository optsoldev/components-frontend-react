import { Divider } from '@material-ui/core';
import styled from 'styled-components';

interface OptDividerProps {
  marginY?: number;
}

export const OptDivider = styled(Divider)<OptDividerProps>`
  background-color: ${({ theme }) => theme.drawer.divider};
  ${({ marginY }) => `margin: ${marginY}px 0;`}
`;
