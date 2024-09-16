import { Box } from '@mui/material';
import { Table, TableRef } from '@optsol/react';
import { useCallback, useRef, useState } from 'react';

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
  }

  const tableRef = useRef<TableRef>(null);

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
        onSelectRow={(value: Teste) => console.log(value.name)}
        selectedRowIds={permissoes}
      />
    </Box>
  );
}

export default TablePage;
