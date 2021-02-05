import { Divider } from '@material-ui/core';
import styled from 'styled-components';

interface OptDividerProps {
  marginy?: number;
  color?: string;
}

export const OptDivider = styled(Divider)<OptDividerProps>`
  background-color: ${({ color, theme }) => color ?? theme.drawer.divider};
  ${({ marginy }) => `margin: ${marginy}px 0;`}
`;
