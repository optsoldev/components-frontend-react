import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { Table as ReactTable } from '@tanstack/react-table';

import { TableControls, TableOptions } from './@types';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

interface TableViewProps<T extends object> {
  title?: string;
  table: ReactTable<T>;
  controls: TableControls<T>;
  headerTitlePosition?: 'start' | 'center' | 'end';
  options?: TableOptions;
}

function TableView<T extends object>({
  table,
  controls,
  headerTitlePosition,
  options,
}: Readonly<TableViewProps<T>>) {
  return (
    <TableContainer sx={{ maxHeight: 1 }}>
      <Table stickyHeader size="small">
        <TableHeaders
          groups={table.getHeaderGroups()}
          titlePosition={headerTitlePosition}
        />

        <TableBody>
          <TableRows table={table} />

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

          {options?.bottomElement && (
            <TableRow>
              <TableCell
                colSpan={10000}
                style={{ textAlign: 'end', padding: '18px 24px' }}
              >
                {options.bottomElement}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableView;
