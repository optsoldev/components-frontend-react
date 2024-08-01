import { Box } from '@mui/material';
import { Table } from '@optsol/react';

function TablePage() {
  const data = [
    { id: 1, name: 'John Doe', age: 33 },
    { id: 2, name: 'Jane Doe', age: 31 },
    { id: 3, name: 'John Smith', age: 35 },
    { id: 4, name: 'Jane Smith', age: 32 }
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
          onClick: console.log
        }}
      />
    </Box>
  );
}

export default TablePage;
