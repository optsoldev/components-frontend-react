import { Box, TableCell, TableRow } from '@mui/material';
import { Table, Table_v2, TableRef } from '@optsol/react';
import { useCallback, useRef, useState } from 'react';
import { Path } from 'react-hook-form';

export interface Teste {
  id: number;
  name: string;
  age: number;
}

function TablePage() {
  const data = [
    { id: 1, name: 'John Doe', age: 33 },
    { id: 2, name: 'Jane Doe', age: 31 },
    { id: 3, name: 'John Smith', age: 35 },
    { id: 4, name: 'Jane Smith', age: 32 },
    { id: 5, name: 'John Doe', age: 33 },
    { id: 6, name: 'Jane Doe', age: 31 },
    { id: 7, name: 'John Smith', age: 35 },
    { id: 8, name: 'Jane Smith', age: 32 }
  ];
  const [sorting, setSorting] = useState<{ id: Path<Teste>; desc: boolean }[]>(
    []
  );
  const [newList, setNewList] = useState<string[]>([]);
  const [permissoes, setPermissoes] = useState<Record<string, boolean>>({
    1: true,
    2: false,
    3: true,
    4: false
  });

  const funcTest = useCallback((list: string[]) => {
    setNewList((prevList) => {
      if (JSON.stringify(prevList) !== JSON.stringify(list)) {
        return list;
      }
      return prevList; // Não atualiza se for o mesmo
    });
  }, []);

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

  return (
    <Box p={2} display="flex" flex={1} flexDirection="column">
      <button onClick={() => console.log(newList)}>teste</button>
      <button
        onClick={() => {
          handlerRemoverSelecao();
        }}
      >
        REMOVER SELECAO
      </button>
      <Table
        ref={tableRef}
        data={data}
        columns={[
          { title: 'ID', field: 'id', hidden: true },
          {
            title: 'Name',
            field: 'name',
            hidden: false,
            render: (value) => <p>{value.name}</p>
          },
          { title: 'Age', field: 'age', hidden: false, width: 700 }
        ]}
        TableRowProps={{
          onClick: (value) => console.log(value)
        }}
        rowSelection
        onSelectedRows={(rows: Teste[]) => {
          console.log('loop');
          funcTest(rows.map((row) => row.name.toString()));
        }}
        onSelectRow={(value: Teste, isSelected: boolean) =>
          console.log(value, isSelected)
        }
        selectedRowIds={permissoes}
        disableMultipleSelection
      />

      <Table_v2
        ref={table_v2Ref}
        data={data}
        enableRowSelection
        enableMultiRowSelection
        onRowSelectionChange={console.log}
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
