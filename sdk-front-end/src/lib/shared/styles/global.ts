import { createGlobalStyle } from 'styled-components';
import { appBarHeight } from '../../components/OptLayout/styles';
import { ScrollbarCSS } from './generic';

interface GlobalStylesProps {
  noAppBar?: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // Reseta para fonts padrões dos dispositivos
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
  }

  html, body, #root {
      height: ${({ noAppBar }) => (noAppBar ? `100%` : `calc(100% - ${appBarHeight}px)`)};
  }

  #root {
    display: flex;
    overflow-y: ${({ noAppBar }) => (noAppBar ? `hidden` : `auto`)};

    ${ScrollbarCSS}
  }
`;