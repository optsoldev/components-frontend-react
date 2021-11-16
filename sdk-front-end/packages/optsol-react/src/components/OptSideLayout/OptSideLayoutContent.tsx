
import React from 'react';
import { ReactDivStyle } from '../../types/ReactDivStyle';
import * as S from './styles';

export const OptSideLayoutContent = React.forwardRef<HTMLDivElement, ReactDivStyle>((props, ref) => {
  return <S.SideLayoutContent {...props} ref={ref} />;
});
