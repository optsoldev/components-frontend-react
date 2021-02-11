import { Chip } from '@material-ui/core';
import styled from 'styled-components';

interface OptChipProps {
  color?: string;
  backgroundcolor?: string;
}

export const OptChip = styled(Chip)<OptChipProps>`
  font-weight: 600;
  ${({ backgroundcolor }) => (backgroundcolor ? `background-color: ${backgroundcolor};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
`;
