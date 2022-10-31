import { css } from 'styled-components';

export const ScrollbarCSS = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      13deg,
      ${({ theme }) => theme.scrollbar.topColor} 14%,
      ${({ theme }) => theme.scrollbar.bottomColor} 64%
    );
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      13deg,
      ${({ theme }) => theme.scrollbar.hover.topCollor} 14%,
      ${({ theme }) => theme.scrollbar.hover.bottomCollor} 64%
    );
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.background};
    box-shadow: inset 7px 10px 12px ${({ theme }) => theme.scrollbar.shadowColor};
  }
`;
