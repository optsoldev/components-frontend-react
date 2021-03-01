import { Chip } from '@material-ui/core';
import styled from 'styled-components';

interface OptChipProps {
  textcolor?: string;
  backgroundcolor?: string;
}

export const OptChip = styled(Chip)<OptChipProps>`
  font-weight: 600;
  ${({ backgroundcolor }) => (backgroundcolor ? `background-color: ${backgroundcolor};` : '')}
  ${({ textcolor }) => (textcolor ? `color: ${textcolor};` : '')}
`;
