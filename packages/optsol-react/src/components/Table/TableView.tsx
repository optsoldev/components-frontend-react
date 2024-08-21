import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { Table as ReactTable } from '@tanstack/react-table';

import { TableControls, TableRowProps } from './@types';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

interface TableViewProps<T extends object> {
  title?: string;
  table: ReactTable<T>;
  controls: TableControls<T>;
  headerTitlePosition?: 'start' | 'center' | 'end';
  TableRowProps?: TableRowProps<T>;
  selectableRows?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onSelectRow?: (rowId: string, isSelected: boolean) => void;
  disableSelectAll?: boolean;
}

function TableView<T extends object>({
  table,
  controls,
  headerTitlePosition,
  TableRowProps,
  selectableRows = false,
  selectedRowIds = {},
  onSelectRow,
  disableSelectAll = false
}: Readonly<TableViewProps<T>>) {
  const rows = table.getRowModel().rows;

  const isAllSelected = rows.every((row) => selectedRowIds[row.id]);

  const isIndeterminate =
    Object.keys(selectedRowIds).length > 0 && !isAllSelected;

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    rows.forEach((row) => {
      if (onSelectRow) {
        onSelectRow(row.id, isChecked);
      }
    });
  };

  return (
    <TableContainer sx={{ maxHeight: 1 }}>
      <Table stickyHeader size="small">
        <TableHeaders
          groups={table.getHeaderGroups()}
          titlePosition={headerTitlePosition}
          selectableRows={selectableRows}
          disableSelectAll={disableSelectAll}
          onSelectAll={handleSelectAllChange}
          isAllSelected={
            isAllSelected ? 'all' : isIndeterminate ? 'indeterminate' : 'none'
          }
        />

        <TableBody>
          <TableRows
            table={table}
            TableRowProps={TableRowProps}
            selectableRows={selectableRows}
            selectedRowIds={selectedRowIds}
            onSelectRow={onSelectRow}
          />

          {controls.loading && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Carregando...
              </TableCell>
            </TableRow>
          )}

          {controls.error && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Erro ao carregar registros
              </TableCell>
            </TableRow>
          )}

          {!controls.data.length && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Não há registros a serem exibidos
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableView;
