import styled from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';
import { sideAppbarWidth } from '../../OptSideAppbar';

export const containerPadding = 12;

export const InitialContainer = styled.div`
  display: flex;
  min-width: calc(100vw - ${sideAppbarWidth}px);
  max-width: calc(100vw - ${sideAppbarWidth}px);
  overflow-x: auto;

  ${ScrollbarCSS}
`;

export const OptSideLayoutPortalContainer = styled.div`
  display: flex;
  min-width: calc(100vw - ${sideAppbarWidth}px);
  max-width: calc(100vw - ${sideAppbarWidth}px);
`;

export const OptSideLayoutPortalContent = styled.div`
  flex: 1;
  display: flex;
`;

export const SideLayoutContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${ScrollbarCSS}
`;
