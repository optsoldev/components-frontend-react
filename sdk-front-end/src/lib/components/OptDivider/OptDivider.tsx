import { Divider } from '@material-ui/core';
import styled from 'styled-components';

export const OptDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.drawer.divider};
`;
