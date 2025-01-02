import { Box, TableCell, TableRow } from '@mui/material';
import { Table, TableRef } from '@optsol/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Path } from 'react-hook-form';

export interface Teste {
  id: number;
  name: string;
  age: number;
}

function TablePage() {
  const [reload, setReload] = useState(false);

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 33 },
      { id: 2, name: 'Jane Doe', age: 31 },
      { id: 3, name: 'John Smith', age: 35 },
      { id: 4, name: 'Jane Smith', age: 32 },
      { id: 5, name: 'John Doe', age: 33 },
      { id: 6, name: 'Jane Doe', age: 31 },
      { id: 7, name: 'John Smith', age: 35 },
      { id: 8, name: 'Jane Smith', age: 32 }
    ],
    []
  );

  const [sorting, setSorting] = useState<{ id: Path<Teste>; desc: boolean }[]>(
    []
  );
  function handlerRemoverSelecao() {
    if (tableRef.current) {
      tableRef.current.removeSelectedRows();
    }

    if (table_v2Ref.current) {
      table_v2Ref.current.removeSelectedRows();
    }
  }

  const tableRef = useRef<TableRef>(null);
  const table_v2Ref = useRef<TableRef>(null);

  const carregar = useCallback(async () => {
    console.log('carregar', reload);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Promise.resolve({ data, total: 8 });
  }, [data, reload]);

  return (
    <Box p={2} display="flex" flex={1} flexDirection="column">
      <button onClick={() => setReload(!reload)}>teste</button>
      <button
        onClick={() => {
          handlerRemoverSelecao();
        }}
      >
        REMOVER SELECAO
      </button>

      <Table
        ref={table_v2Ref}
        data={carregar}
        enableRowSelection
        enableMultiRowSelection
        onRowSelectionChange={(e) => {
          console.log('onRowSelectionChange', e);
        }}
        columnOrder={['id', 'select', 'name', 'age']}
        sorting={sorting}
        onSortingChange={setSorting}
        columns={[
          { title: 'ID', field: 'id', hidden: true },
          {
            title: 'Name',
            field: 'name',
            hidden: false,
            width: 400,
            render: (value) => <p>{value.name}</p>
          },
          { title: 'Age', field: 'age', hidden: false, width: 400 }
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
