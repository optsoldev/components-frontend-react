import { Box, TableCell, TableRow } from '@mui/material';
import { Table, TableDataRequest, TableRef } from '@optsol/react';
import { useCallback, useMemo, useRef, useState } from 'react';

export interface Teste {
  id: number;
  name: string;
  age: number;
}

function TablePage() {
  const [reload] = useState(false);

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 33 },
      { id: 2, name: 'Jane Doe', age: 31 },
      { id: 3, name: 'John Smith', age: 35 },
      { id: 4, name: 'Jane Smith', age: 32 },
      { id: 5, name: 'John Doe', age: 33 },
      { id: 6, name: 'Jane Doe', age: 31 },
      { id: 7, name: 'John Smith', age: 35 },
      { id: 8, name: 'Jane Smith', age: 32 },
      { id: 9, name: 'John Doe', age: 33 },
      { id: 10, name: 'Jane Doe', age: 31 },
      { id: 11, name: 'John Smith', age: 35 },
      { id: 12, name: 'Jane Smith', age: 32 },
      { id: 13, name: 'John Doe', age: 33 },
      { id: 14, name: 'Jane Doe', age: 31 },
      { id: 15, name: 'John Smith', age: 35 },
      { id: 16, name: 'Jane Smith', age: 32 },
      { id: 17, name: 'John Doe', age: 33 },
      { id: 18, name: 'Jane Doe', age: 31 },
      { id: 19, name: 'John Smith', age: 35 },
      { id: 20, name: 'Jane Smith', age: 32 },
      { id: 21, name: 'John Doe', age: 33 },
      { id: 22, name: 'Jane Doe', age: 31 },
      { id: 23, name: 'John Smith', age: 35 },
      { id: 24, name: 'Jane Smith', age: 32 },
      { id: 25, name: 'John Doe', age: 33 },
      { id: 26, name: 'Jane Doe', age: 31 },
      { id: 27, name: 'John Smith', age: 35 },
      { id: 28, name: 'Jane Smith', age: 32 },
      { id: 29, name: 'John Doe', age: 33 },
      { id: 30, name: 'Jane Doe', age: 31 },
      { id: 31, name: 'John Smith', age: 35 },
      { id: 32, name: 'Jane Smith', age: 32 },
      { id: 33, name: 'John Doe', age: 33 },
      { id: 34, name: 'Jane Doe', age: 31 },
      { id: 35, name: 'John Smith', age: 35 },
      { id: 36, name: 'Jane Smith', age: 32 },
      { id: 37, name: 'John Doe', age: 33 },
      { id: 38, name: 'Jane Doe', age: 31 },
      { id: 39, name: 'John Smith', age: 35 },
      { id: 40, name: 'Jane Smith', age: 32 },
      { id: 41, name: 'John Doe', age: 33 },
      { id: 42, name: 'Jane Doe', age: 31 },
      { id: 43, name: 'John Smith', age: 35 },
      { id: 44, name: 'Jane Smith', age: 32 },
      { id: 45, name: 'John Doe', age: 33 },
      { id: 46, name: 'Jane Doe', age: 31 },
      { id: 47, name: 'John Smith', age: 35 },
      { id: 48, name: 'Jane Smith', age: 32 },
      { id: 49, name: 'John Doe', age: 33 },
      { id: 50, name: 'Jane Doe', age: 31 },
      { id: 51, name: 'John Smith', age: 35 },
      { id: 52, name: 'Jane Smith', age: 32 },
      { id: 53, name: 'John Doe', age: 33 },
      { id: 54, name: 'Jane Doe', age: 31 },
      { id: 55, name: 'John Smith', age: 35 },
      { id: 56, name: 'Jane Smith', age: 32 },
      { id: 57, name: 'John Doe', age: 33 },
      { id: 58, name: 'Jane Doe', age: 31 },
      { id: 59, name: 'John Smith', age: 35 },
      { id: 60, name: 'Jane Smith', age: 32 }
    ],
    []
  );

  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([]);
  function handlerRemoverSelecao() {
    if (tableRef.current) {
      tableRef.current.removeSelectedRows();
    }
  }

  const tableRef = useRef<TableRef>(null);

  const carregar: TableDataRequest<any> = useCallback(
    async ({ pageSize, page }) => {
      console.log('carregar', reload);
      await new Promise((resolve) => setTimeout(resolve, 300));
      return {
        data: data.slice(page * pageSize, page * pageSize + pageSize),
        total: data.length
      };
    },
    [data, reload]
  );

  return (
    <Box p={2} display="flex" flex={1} flexDirection="column">
      <button
        onClick={() => console.log(tableRef.current?.getState().rowSelection)}
      >
        teste
      </button>
      <button onClick={handlerRemoverSelecao}>REMOVER SELECAO</button>

      <Table
        ref={tableRef}
        data={carregar}
        enableRowSelection
        enableMultiRowSelection
        onRowSelectionChange={(row, selected) => {
          console.log('onRowSelectionChange', row, selected);
        }}
        columnOrder={['id', 'select', 'name', 'age']}
        sorting={sorting}
        onSortingChange={setSorting}
        columns={[
          { title: 'ID', field: 'id', hidden: true },
          { title: 'Age', field: 'age', hidden: false, width: 400 },
          {
            title: 'Name',
            field: 'name',
            hidden: false,
            width: 400,
            render: (value) => <p>{value.name}</p>
          }
        ]}
        renderFooter={(rows) => (
          <TableRow>
            <TableCell colSpan={2}>Total items</TableCell>
            <TableCell colSpan={rows.length - 2}>{18} items :D</TableCell>
          </TableRow>
        )}
        TableRowProps={{
          onClick: (value) => console.log(value)
        }}
      />
    </Box>
  );
}

export default TablePage;
