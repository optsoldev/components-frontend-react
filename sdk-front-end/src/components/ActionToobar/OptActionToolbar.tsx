import React, { PropsWithChildren } from 'react';
import * as S from './styles';

export type OptActionToolbarProps = {
  title?: string | JSX.Element;
};

export const OptActionToolbar = ({ title, children }: PropsWithChildren<OptActionToolbarProps>) => {
  title = typeof title === 'string' ? <S.Title>{title}</S.Title> : title;

  return (
    <S.CustomToolbar>
      {title}
      <S.ActionsContainer>{children}</S.ActionsContainer>
    </S.CustomToolbar>
  );
};
