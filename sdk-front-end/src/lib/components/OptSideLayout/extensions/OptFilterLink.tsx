import React from 'react';
import { ActiveLinkClass } from '../../../shared/constants';
import * as S from './styles';

interface Props {
  name: string;
  to: string;
  total: number;
}

export const OptFilterLink = ({ name, to, total }: Props) => {
  return (
    <S.CustomListItem button>
      <S.CustomSidebarNavLink to={to} activeClassName={ActiveLinkClass}>
        {name}
        <span>{total}</span>
      </S.CustomSidebarNavLink>
    </S.CustomListItem>
  );
};
