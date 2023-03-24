import { Dialog, DialogActions } from '@mui/material';
import styled from 'styled-components';

export const StyledDialog = styled(Dialog)`
  text-align: center;

  .MuiDialog-paper {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
  }
`;

export const OptDialogActions = styled(DialogActions)`
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.divider};
  margin-top: 16px;

  &.MuiDialogActions-root {
    padding: 0;
  }

  & .MuiButton-text {
    flex: 1;
    border-radius: 0;
    margin: 0;
    padding: 20px 8px;
    min-width: 140px;

    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.divider};
    }
  }
`;

export const DialogIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;

  & svg {
    border-radius: 50%;
    background-color: ${({ color }) => `${color}10`};
    padding: 16px;
  }
`;
