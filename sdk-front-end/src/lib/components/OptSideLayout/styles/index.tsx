import styled from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';

export const containerPadding = 12;

export const SuperContainer = styled.div`
  display: flex;
  min-width: 100vw;
  overflow-x: auto;

  ${ScrollbarCSS}
`;

export const MainContainer = styled.div`
  display: flex;
  min-width: 100vw;
`;

export const MainContentContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const MainContentContainerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  ${ScrollbarCSS}
`;
