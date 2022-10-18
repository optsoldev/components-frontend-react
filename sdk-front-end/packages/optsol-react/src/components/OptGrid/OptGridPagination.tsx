import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiPageFirst,
  mdiPageLast,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import { IconButton, MenuItem, Select } from '@mui/material';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

interface Props {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  pageIndex: number;
  pageSize: number;
}

export function OptGridPagination({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}: Props) {
  const { currentTheme } = useOptTheme();

  return (
    <S.PaginationContainer className="pagination">
      <Select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        size="small"
      >
        {[5, 10, 25, 50, 100].map((pageSize) => (
          <MenuItem key={pageSize} value={pageSize}>
            {pageSize} linhas
          </MenuItem>
        ))}
      </Select>

      <IconButton
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        size="small"
      >
        <Icon
          size={1}
          path={mdiPageFirst}
          color={
            canPreviousPage ? currentTheme.color : currentTheme.primaryContrast
          }
        />
      </IconButton>
      <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
        <Icon
          size={1}
          path={mdiChevronLeft}
          color={
            canPreviousPage ? currentTheme.color : currentTheme.primaryContrast
          }
        />
      </IconButton>

      <span>
        Página{' '}
        <strong>
          {pageOptions.length ? pageIndex + 1 : 0} de {pageOptions.length}
        </strong>{' '}
      </span>

      <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
        <Icon
          size={1}
          path={mdiChevronRight}
          color={
            canNextPage ? currentTheme.color : currentTheme.primaryContrast
          }
        />
      </IconButton>
      <IconButton
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <Icon
          size={1}
          path={mdiPageLast}
          color={
            canNextPage ? currentTheme.color : currentTheme.primaryContrast
          }
        />
      </IconButton>

      {/* <span>
        | Ir para:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: '100px' }}
        />
      </span>{' '} */}
    </S.PaginationContainer>
  );
}
