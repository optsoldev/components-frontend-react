import { createGlobalStyle } from 'styled-components';
import { appBarHeight } from '../../components/Layout/styles';

const GlobalStyles = createGlobalStyle`
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
      height: calc(100% - ${appBarHeight}px);
  }
`;

export default GlobalStyles;
