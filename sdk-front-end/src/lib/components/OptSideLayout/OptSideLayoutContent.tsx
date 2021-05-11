import React from 'react';
import * as S from './styles';

type ReactDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const OptSideLayoutContent = React.forwardRef<HTMLDivElement, ReactDiv>((props, ref) => {
  return <S.SideLayoutContent {...props} ref={ref} />;
});
