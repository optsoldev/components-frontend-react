/* eslint-disable react/jsx-key */
import { Row } from 'react-table';

import { OptGridAction, OptGridColumn } from './@types';
import { OptGridActionsCell } from './OptGridActionsCell';

interface Props<T extends object> {
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: 'start' | 'end';
  columns: OptGridColumn<T>[];
  onRowClick?: (data: T) => void;
  page: Row<T>[];
  prepareRow: (row: Row<T>) => void;
}

export function OptGridRows<T extends object>({
  page,
  prepareRow,
  onRowClick,
  actions,
  actionsPosition,
  columns,
}: Props<T>) {
  function getOptColumn(id: string) {
    return columns.find((x) => x.field === id);
  }

  return (
    <>
      {page.map((row) => {
        prepareRow(row);

        return (
          <tr
            onClick={() =>
              onRowClick ? onRowClick(row.values as T) : undefined
            }
            {...row.getRowProps({})}
          >
            {actionsPosition === 'start' && (
              <OptGridActionsCell actions={actions} data={row.values as T} />
            )}

            {row.cells.map((cell) => {
              const currentOptColumn = getOptColumn(cell.column.id);

              let view = cell.render('Cell');

              if (currentOptColumn && currentOptColumn.render) {
                const data = row.values as T;
                view = currentOptColumn.render(data);
              }

              return (
                <td
                  {...cell.getCellProps()}
                  style={{ textAlign: currentOptColumn?.align ?? 'start' }}
                >
                  {view}
                </td>
              );
            })}

            {actionsPosition === 'end' && (
              <OptGridActionsCell actions={actions} data={row.values as T} />
            )}
          </tr>
        );
      })}
    </>
  );
}
