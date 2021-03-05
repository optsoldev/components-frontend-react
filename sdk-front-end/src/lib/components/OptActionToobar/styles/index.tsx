import { Button, IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { containerPadding } from '../../OptLayout/styles';

interface CustomToolbarProps {
  clearmargin: boolean | 1 | 0;
}

export const CustomToolbar = styled(Toolbar)<CustomToolbarProps>`
  min-height: 65px;
  border-bottom: 1px solid ${({ theme }) => theme.divider};

  ${({ clearmargin }) =>
    !!clearmargin
      ? 'margin: unset'
      : `margin: -${containerPadding}px -${containerPadding}px ${containerPadding}px -${containerPadding}px`};
`;

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
  color: ${({ theme }) => theme.color};
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
