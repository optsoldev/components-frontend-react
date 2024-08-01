/* eslint-disable react/jsx-key */
import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { HeaderGroup, flexRender } from '@tanstack/react-table';

interface Props<T extends object> {
  groups: HeaderGroup<T>[];
  titlePosition?: 'start' | 'center' | 'end';
}

export function TableHeaders<T extends object>({ groups }: Readonly<Props<T>>) {
  return (
    <TableHead>
      {groups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const { column } = header;
            return (
              <TableCell
                key={header.id}
                colSpan={header.colSpan}
                width={header.getSize()}
              >
                <Typography fontWeight={600}>
                  {flexRender(column.columnDef.header, header.getContext())}
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
}
