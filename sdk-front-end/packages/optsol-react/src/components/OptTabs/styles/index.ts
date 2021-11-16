import { AppBar, Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import { ColorPalette } from '../../../shared/styles/colors';

export const CustomTabAppBar = styled(AppBar)`
  box-shadow: none;
  margin-bottom: 12px;
`;

CustomTabAppBar.defaultProps = {
  position: 'static',
  color: 'transparent',
};

export const CustomTab = styled(Tab)`
  transition: all ease-in-out 200ms;
  border-radius: 16px;
  background-color: ${ColorPalette.gray5};
  color: ${ColorPalette.gray2};
  height: 30px;

  &:hover {
    & > span {
      color: ${ColorPalette.black};
    }
  }

  & > span {
    transition: transform ease-in-out 200ms;
    color: ${ColorPalette.gray2};
  }

  &.Mui-selected {
    background-color: ${({ theme }) => theme.primary};

    & > span {
      color: ${({ theme }) => theme.primaryContrast};
    }
  }
`;

export const CustomTabs = styled(Tabs)`
  & ${CustomTab} {
    margin: 0 5px;
    height: 30px;

    &:first-child {
      margin: 0 5px 0 0;
    }
    &:last-child {
      margin: 0 0 0 5px;
    }
  }
`;
