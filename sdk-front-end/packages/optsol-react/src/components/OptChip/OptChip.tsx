import { Chip } from '@mui/material';
import styled from 'styled-components';

export interface OptChipProps {
  textcolor?: string;
  backgroundcolor?: string;
}

export const OptChip = styled(Chip)<OptChipProps>`
  font-weight: 600;
  ${({ backgroundcolor }) => (backgroundcolor ? `background-color: ${backgroundcolor};` : '')}
  ${({ textcolor }) => (textcolor ? `color: ${textcolor};` : '')}
`;

