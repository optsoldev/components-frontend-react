import { Backdrop } from '@mui/material';
import styled from 'styled-components';
import { OptLoading } from '../OptLoading';

// 1201, see https://mui.com/pt/material-ui/customization/z-index/
export const CustomBackdrop = styled(Backdrop)`
  z-index: 1201;
  color: #fff;
`;

export type OptBackdropProps = {
  open: boolean;
};

export function OptBackdrop({ open }: OptBackdropProps) {
  return (
    <CustomBackdrop open={open}>
      <OptLoading color="secondary" size={60} />
    </CustomBackdrop>
  );
}
