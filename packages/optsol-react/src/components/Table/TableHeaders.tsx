import {
  TextSortAscendingFilled,
  TextSortDescendingFilled
} from '@fluentui/react-icons';
import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { HeaderGroup, flexRender } from '@tanstack/react-table';

import { FlexBox } from '../Flexbox';

interface Props<T extends object> {
  groups: HeaderGroup<T>[];
  titlePosition?: 'start' | 'center' | 'end';
}

export function TableHeaders<T extends object>({
  groups,
  titlePosition = 'start'
}: Readonly<Props<T>>) {
  return (
    <TableHead>
      {groups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const { column } = header;
            const width = isNaN(header.getSize()) ? 'auto' : header.getSize();
            return (
              <TableCell
                key={header.id}
                width={width}
                colSpan={header.colSpan}
                style={{ textAlign: titlePosition }}
                onClick={header.column.getToggleSortingHandler()}
                sx={{ cursor: 'default' }}
                /* sx={{
                  cursor: header.column.getCanSort() ? 'pointer' : 'default'
                }} */
              >
                <FlexBox
                  alignItems="center"
                  gap={1}
                  /* title={
                    header.column.getCanSort()
                      ? header.column.getNextSortingOrder() === 'asc'
                        ? 'Sort ascending'
                        : header.column.getNextSortingOrder() === 'desc'
                          ? 'Sort descending'
                          : 'Clear sort'
                      : undefined
                  } */
                >
                  <Typography fontWeight={600}>
                    {flexRender(column.columnDef.header, header.getContext())}
                  </Typography>
                  {{
                    asc: <TextSortAscendingFilled fontSize={20} />,
                    desc: <TextSortDescendingFilled fontSize={20} />
                  }[header.column.getIsSorted() as string] ?? null}
                </FlexBox>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
}
