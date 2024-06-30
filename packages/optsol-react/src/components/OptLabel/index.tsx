import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';
import styled from 'styled-components';

/**
 * Este componente sera depreciado na proxima versao, substitua pelo InputLabel
 **/
export const OptLabel = styled(MuiInputLabel)`
  margin-bottom: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;

type InputLabelProps = MuiInputLabelProps;
/**
 * @deprecated This will be removed soon
 */
export const InputLabel = ({ color, children }: InputLabelProps) => {
  return <MuiInputLabel color={color}>{children}</MuiInputLabel>;
};
