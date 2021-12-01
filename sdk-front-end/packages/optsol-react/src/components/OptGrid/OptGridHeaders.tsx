import { HeaderGroup } from 'react-table'
import { OptGridActionsHeader } from './OptGridActionsHeader'
import * as S from './styles'

interface Props<T extends object> {
  headerGroups: HeaderGroup<T>[]
  actionsPosition?: 'start' | 'end'
}

export const OptGridHeaders = <T extends object>({
  headerGroups,
  actionsPosition
}: Props<T>) => {

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {actionsPosition === 'start' && <OptGridActionsHeader />}

          {headerGroup.headers.map((column) => {

            return (
              <S.StyledTh
                {...column.getHeaderProps()}
                customWidth={column.width}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted && (column.isSortedDesc ? ' 🔽' : ' 🔼')}
                </span>
              </S.StyledTh>
            )
          })}

          {actionsPosition === 'end' && <OptGridActionsHeader />}
        </tr>
      ))}
    </thead>
  )
}
