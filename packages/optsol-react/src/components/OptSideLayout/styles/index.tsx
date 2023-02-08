import styled from 'styled-components';

import { ScrollbarCSS } from '../../../shared/styles/generic';

export const containerPadding = 12;

interface CurrentSidebarWidthProps {
  currentsidebarwidth: number;
}

export const InitialContainer = styled.div<CurrentSidebarWidthProps>`
  display: flex;
  min-width: calc(
    100vw - ${({ currentsidebarwidth }) => currentsidebarwidth}px
  );
  max-width: calc(
    100vw - ${({ currentsidebarwidth }) => currentsidebarwidth}px
  );
  overflow-x: auto;

  ${ScrollbarCSS}
`;

export const StyledOptSideLayoutPortalContainer = styled.div<CurrentSidebarWidthProps>`
  display: flex;
  min-width: calc(
    100vw - ${({ currentsidebarwidth }) => currentsidebarwidth}px
  );
  max-width: calc(
    100vw - ${({ currentsidebarwidth }) => currentsidebarwidth}px
  );
`;

export const OptSideLayoutPortalContent = styled.div`
  flex: 1;
  display: flex;
`;

export const SideLayoutContent = styled.div<{ $noPadding: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: ${({ $noPadding }) =>
    $noPadding ? '0px' : `${containerPadding}px`};
  display: flex;
  flex-direction: column;

  ${ScrollbarCSS}

  p {
    margin: 8px 0;
  }
`;
