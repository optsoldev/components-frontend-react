import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../shared/styles/colors';

interface Props {
  $noborder?: boolean;
  width?: number;
  paddingx?: number;
}

export const AdvancedSearchContainer = styled.div<Props>`
  display: flex;
  margin-bottom: 12px;
  width: ${({ width }) => width + 'px' ?? '100%'};
  ${({ paddingx }) =>
    css`
      padding: 0 ${paddingx}px;
    `};

  & > input {
    flex: 1;
    padding: 12px;
    line-height: 38px;
    font-size: 14px;
    border: none;
    border: ${({ $noborder }) => ($noborder ? 'unset' : `1px solid ${ColorPalette.gray6}`)};
    border-right: unset;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 48px;

    &:focus {
      -webkit-box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      -moz-box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      outline: 0 none;
    }
  }

  & button {
    border: none;
    background-color: ${({ theme }) => theme.primary};
    color: ${ColorPalette.white};
    padding: 12px;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 48px;

    &:focus {
      outline: 0 none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

AdvancedSearchContainer.defaultProps = {
  $noborder: false,
};
