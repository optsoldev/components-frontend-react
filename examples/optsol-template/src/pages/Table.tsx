import { Box } from '@mui/material';
import { Table } from '@optsol/react';

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

  return (
    <Box p={2} display="flex" flex={1} flexDirection="column">
      <Table
        data={data}
        columns={[
          { title: 'ID', field: 'id', hidden: false },
          { title: 'Name', field: 'name', hidden: false },
          { title: 'Age', field: 'age', hidden: false, width: 200 }
        ]}
        TableRowProps={{
          onClick: (value) => console.log(value)
        }}
        rowSelection
        onSelectRow={(rowId, isSelected) => console.log(rowId, isSelected)}
      />
    </Box>
  );
}

export default TablePage;
