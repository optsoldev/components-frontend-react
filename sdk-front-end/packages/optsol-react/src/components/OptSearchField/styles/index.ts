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
  width: ${({ width }) => `${width  }px` ?? '100%'};
  ${({ paddingx }) =>
    css`
      padding: 0 ${paddingx}px;
    `};

  & > input {
    flex: 1;
    padding: 12px;
    line-height: 38px;
    font-size: 14px;
    height: 48px;
    border: none;
    border: ${({ $noborder }) =>
      $noborder ? 'unset' : `1px solid ${ColorPalette.gray6}`};
    border-right: unset;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    border: ${({ $noborder }) =>
      $noborder ? 'unset' : `1px solid ${ColorPalette.gray6}`};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & button {
    border: none;
    background-color: ${ColorPalette.white};
    fill: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    padding: 12px;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 48px;
    width: 48px;

    &:focus {
      outline: 0 none;
      border-radius: 50%;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  & .MuiOutlinedInput-input::placeholder {
    color: ${ColorPalette.gray3};
    opacity: 1;
  }

  &
    [class*='MuiInputBase-root-MuiOutlinedInput-root']:hover
    .MuiOutlinedInput-notchedOutline {
    border: ${({ $noborder }) =>
      $noborder ? 'unset' : `1px solid ${ColorPalette.gray5}`};
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline,
  [class*='MuiInputBase-root-MuiOutlinedInput-root']:hover.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: ${({ $noborder }) =>
      $noborder ? 'unset' : `2px solid ${ColorPalette.primaryTints.tint1}`};
  }
`;

AdvancedSearchContainer.defaultProps = {
  $noborder: false,
};
