import { Divider } from '@mui/material';
import styled from 'styled-components';

/**
 * @deprecated This will be removed soon
 */
export interface OptDividerProps {
  marginy?: number;
  color?: string;
}

/**
 * @deprecated This will be removed soon
 */
export const OptDivider = styled(Divider)<OptDividerProps>`
  background-color: ${({ color, theme }) => color ?? theme.drawer.divider};
  ${({ marginy }) => `margin: ${marginy}px 0;`}
`;
