import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
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
}

function TableView<T extends object>({
  table,
  controls,
  headerTitlePosition,
  TableRowProps,
}: Readonly<TableViewProps<T>>) {
  return (
    <TableContainer sx={{ maxHeight: 1 }}>
      <Table stickyHeader size="small">
        <TableHeaders
          groups={table.getHeaderGroups()}
          titlePosition={headerTitlePosition}
        />

        <TableBody>
          <TableRows table={table} TableRowProps={TableRowProps} />

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
