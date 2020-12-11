import MaterialTable, { Localization, MaterialTableProps, Options, Query, QueryResult } from 'material-table';
import React from 'react';
import * as S from './styles';

export interface OptGridResponse<T extends object> extends Promise<QueryResult<T>> {}

export interface OptGridRequest<T extends object> extends Query<T> {}

export interface OptGridOptions<T extends object> extends Options<T> {}

export interface OptGridProps<T extends object> extends Omit<MaterialTableProps<T>, 'icons'> {
  data: T[] | ((query: OptGridRequest<T>) => OptGridResponse<T>);
  options: OptGridOptions<T>;
}

const localization: Localization = {
  body: {
    emptyDataSourceMessage: 'Nenhum registro a exibir',
  },
  header: {
    actions: 'Ações',
  },
  toolbar: {
    searchPlaceholder: 'Pesquisa rápida',
    searchTooltip: 'Pesquisa rápida',
    nRowsSelected: '{0} linha(s) selecionada(s)',
    exportAriaLabel: 'Exportar',
    exportTitle: 'Exportar',
    exportCSVName: 'Exportar como CSV',
    exportPDFName: 'Exportar como PDF',
  },
  pagination: {
    labelDisplayedRows: ' {from}-{to} de {count}',
    labelRowsSelect: 'linhas',
    firstTooltip: 'Primeira página',
    previousTooltip: 'Página anterior',
    nextTooltip: 'Próxima página',
    lastTooltip: 'Última página',
  },
  grouping: {
    groupedBy: 'Agrupado por: ',
    placeholder: 'Arraste uma coluna até aqui para agrupar',
  },
};

export const OptGrid = <T extends object>({ options, ...props }: OptGridProps<T>) => {
  return (
    <S.GridContainer>
      <MaterialTable {...props} icons={S.tableIcons} options={options} localization={localization} />
    </S.GridContainer>
  );
};
