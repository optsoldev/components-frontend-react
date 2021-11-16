import { InputLabel } from '@mui/material';
import styled from 'styled-components';

export const OptLabel = styled(InputLabel)`
  margin-bottom: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;
