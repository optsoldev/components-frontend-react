import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { HeaderGroup, flexRender } from '@tanstack/react-table';

interface Props<T extends object> {
  groups: HeaderGroup<T>[];
  titlePosition?: 'start' | 'center' | 'end';
  rowSelection?: boolean;
  disableMultipleSelection?: boolean;
  onSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected?: 'all' | 'indeterminate' | 'none';
}

export function TableHeaders<T extends object>({
  groups,
  titlePosition = 'start',
  rowSelection = false,
  disableMultipleSelection = false,
  onSelectAll,
  isAllSelected
}: Readonly<Props<T>>) {
  return (
    <TableHead>
      {groups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {rowSelection && (
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={isAllSelected === 'indeterminate'}
                checked={isAllSelected === 'all'}
                onChange={onSelectAll}
                disabled={disableMultipleSelection}
              />
            </TableCell>
          )}
          {headerGroup.headers.map((header) => {
            const { column } = header;
            const width = isNaN(header.getSize()) ? 'auto' : header.getSize();
            return (
              <TableCell
                key={header.id}
                colSpan={header.colSpan}
                width={width}
                style={{ textAlign: titlePosition }}
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
