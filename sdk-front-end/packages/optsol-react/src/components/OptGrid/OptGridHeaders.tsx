import { HeaderGroup } from 'react-table'
import { OptGridColumn } from '.'
import { OptGridActionsHeader } from './OptGridActionsHeader'
import * as S from './styles'

interface Props<T extends object> {
  headerGroups: HeaderGroup<T>[]
  columns: OptGridColumn<T>[]
  actionsPosition?: 'start' | 'end'
}

export const OptGridHeaders = <T extends object>({
  headerGroups,
  columns,
  actionsPosition
}: Props<T>) => {
  function getOptColumn(id: string) {
    return columns.find((x) => x.field === id)
  }

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {actionsPosition === 'start' && <OptGridActionsHeader />}

          {headerGroup.headers.map((column) => {
            const currentOptColumn = getOptColumn(column.id)

            return (
              <S.StyledTh
                {...column.getHeaderProps()}
                customWidth={currentOptColumn?.width}
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
