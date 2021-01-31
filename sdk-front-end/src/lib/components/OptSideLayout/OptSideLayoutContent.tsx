import React, { PropsWithChildren } from 'react';
import * as S from './styles';

export const OptSideLayoutContent = ({ children }: PropsWithChildren<{}>) => {
  return <S.SideLayoutContent>{children}</S.SideLayoutContent>;
};
