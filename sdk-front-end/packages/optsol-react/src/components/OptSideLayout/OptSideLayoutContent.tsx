import React from 'react';
import { ReactDivStyle } from '../../types/ReactDivStyle';
import * as S from './styles';

export const OptSideLayoutContent = React.forwardRef<
  HTMLDivElement,
  ReactDivStyle
>((props, ref) => <S.SideLayoutContent {...props} ref={ref} />);
