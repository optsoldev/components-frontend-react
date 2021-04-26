import { Button, IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { containerPadding } from '../../OptLayout/styles';

interface CustomToolbarProps {
  clearmargin: boolean | 1 | 0;
  background?: string;
  noborder?: boolean;
  nopadding?: boolean;
}

export const CustomToolbar = styled(Toolbar)<CustomToolbarProps>`
  min-height: 65px;
  ${({ noborder, theme }) => !noborder && `border-bottom: 1px solid ${theme.divider};`}
  ${({ nopadding }) => nopadding && `padding: 0;`}

  color: ${({ color }) => color ?? 'inherit'};
  background: ${({ background }) => background ?? 'inherit'};

  ${({ clearmargin }) =>
    !!clearmargin
      ? 'margin: unset'
      : `margin: -${containerPadding}px -${containerPadding}px ${containerPadding}px -${containerPadding}px`};
`;

CustomToolbar.defaultProps = {
  noborder: false,
  nopadding: false,
};

export const CustomIconButton = styled(IconButton)`
  margin-right: 8px;
`;

export const ActionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ color }) => color ?? 'inherit'};
`;

type CustomButtonProps = {
  textcolor: string;
};

export const CustomButton = styled(Button)<CustomButtonProps>`
  &:hover {
    &.MuiButton-root {
      color: ${(props) => props.textcolor};
    }
  }
`;
