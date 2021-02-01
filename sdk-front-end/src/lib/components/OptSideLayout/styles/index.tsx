import styled from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';

export const containerPadding = 12;

export const InitialContainer = styled.div`
  display: flex;
  min-width: 100vw;
  overflow-x: auto;

  ${ScrollbarCSS}
`;

export const OptSideLayoutPortalContainer = styled.div`
  display: flex;
  min-width: 100vw;
`;

export const OptSideLayoutPortalContent = styled.div`
  flex: 1;
  display: flex;
`;

export const SideLayoutContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  
  ${ScrollbarCSS}
`;
