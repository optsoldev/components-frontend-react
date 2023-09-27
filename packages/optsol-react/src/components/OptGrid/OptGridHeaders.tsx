/* eslint-disable react/jsx-key */
import { HeaderGroup } from 'react-table';

import { OptGridActionsHeader } from './OptGridActionsHeader';
import * as S from './styles';

interface Props<T extends object> {
  groups: HeaderGroup<T>[];
  actionsPosition?: 'start' | 'end';
  titlePosition?: 'start' | 'center' | 'end';
}

export function OptGridHeaders<T extends object>({
  groups,
  actionsPosition,
  titlePosition,
}: Props<T>) {
  return (
    <thead>
      {groups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {actionsPosition === 'start' && <OptGridActionsHeader />}

          {headerGroup.headers.map((column) => (
            <S.StyledTh
              {...column.getHeaderProps(column.getSortByToggleProps())}
              position={titlePosition}
              customWidth={column.width}
            >
              {column.render('Header')}
              <span>
                {column.isSorted && (column.isSortedDesc ? ' ▼' : ' ▲')}
              </span>
            </S.StyledTh>
          ))}

          {actionsPosition === 'end' && <OptGridActionsHeader />}
        </tr>
      ))}
    </thead>
  );
}
