import {
  TextSortAscendingRegular,
  TextSortDescendingRegular
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
                sx={{
                  cursor: header.column.getCanSort() ? 'pointer' : 'none'
                }}
              >
                <FlexBox alignItems="center" gap={1}>
                  {header.column.getCanSort() ? (
                    header.column.getNextSortingOrder() === 'asc' ? (
                      <TextSortAscendingRegular />
                    ) : header.column.getNextSortingOrder() === 'desc' ? (
                      <TextSortDescendingRegular />
                    ) : null
                  ) : undefined}

                  <Typography fontWeight={600}>
                    {flexRender(column.columnDef.header, header.getContext())}
                  </Typography>
                </FlexBox>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
}
