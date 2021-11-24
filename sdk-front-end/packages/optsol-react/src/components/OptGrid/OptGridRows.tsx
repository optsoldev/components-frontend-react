import React from 'react'
import { Row } from 'react-table'
import { OptGridAction, OptGridColumn } from '.'
import { OptGridActionsCell } from './OptGridActionsCell'

interface Props<T extends object> {
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[]
  actionsPosition?: 'start' | 'end'
  columns: OptGridColumn<T>[]
  onRowClick?: (data: T) => void
  page: Row<T>[]
  prepareRow: (row: Row<T>) => void
}

export const OptGridRows = <T extends object>({
  page,
  prepareRow,
  onRowClick,
  actions,
  actionsPosition,
  columns
}: Props<T>) => {
  function getOptColumn(id: string) {
    return columns.find((x) => x.field === id)
  }

  return (
    <React.Fragment>
      {page.map((row, _) => {
        prepareRow(row)

        return (
          <tr
            onClick={(_) => {
              onRowClick && onRowClick(row.values as T)
            }}
            {...row.getRowProps({})}
          >
            {actionsPosition === 'start' && (
              <OptGridActionsCell actions={actions} data={row.values as T} />
            )}

            {row.cells.map((cell) => {
              const currentOptColumn = getOptColumn(cell.column.id)!

              let content = cell.render('Cell')

              const hasCustomRender =
                currentOptColumn && currentOptColumn.render

              if (hasCustomRender) {
                const data = row.values as T
                content = currentOptColumn.render!(data)
              }

              return (
                <td
                  {...cell.getCellProps()}
                  style={{ textAlign: currentOptColumn?.align ?? 'start' }}
                >
                  {content}
                </td>
              )
            })}

            {actionsPosition === 'end' && (
              <OptGridActionsCell actions={actions} data={row.values as T} />
            )}
          </tr>
        )
      })}
    </React.Fragment>
  )
}
