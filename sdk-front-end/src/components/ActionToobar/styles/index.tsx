import { Button, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { Theme } from '../../../shared/styles/theme';

export const CustomToolbar = styled(Toolbar)`
  min-height: 65px;
  border-bottom: 1px solid ${({ theme }) => theme.color};
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
  font-weight: 200;
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
