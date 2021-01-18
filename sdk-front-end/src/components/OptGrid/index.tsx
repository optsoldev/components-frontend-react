import MaterialTable, {
  Action,
  Column,
  Localization,
  MaterialTableProps,
  Options,
  Query,
  QueryResult,
} from 'material-table';
import React, { createRef } from 'react';
import * as S from './styles';

export interface OptGridResponse<T extends object> extends Promise<QueryResult<T>> {}

export interface OptGridRequest<T extends object> extends Query<T> {}

export interface OptGridOptions<T extends object> extends Options<T> {}

export interface OptGridAction<T extends object> extends Action<T> {}

export interface OptGridColumn<T extends object> extends Column<T> {}

export interface OptGridProps<T extends object>
  extends Omit<Omit<Omit<MaterialTableProps<T>, 'icons'>, 'columns'>, 'localization'> {
  data: T[] | ((query: OptGridRequest<T>) => OptGridResponse<T>);
  options?: OptGridOptions<T>;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: 'start' | 'end';
  columns: OptGridColumn<T>[];
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

export type OptGridRef = {
  refresh: () => void;
};

export class OptGrid<T extends object> extends React.Component<OptGridProps<T>> {
  public static defaultProps: Partial<OptGridProps<any>> = {
    actionsPosition: 'start',
  };

  private isRemote = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private tableRef = createRef<any>();

  constructor(props: OptGridProps<T>) {
    super(props);

    if (props.actionsPosition === 'end') {
      if (!props.options) {
        props.options = {};
      }

      props.options.actionsColumnIndex = -1;
    }

    const { data } = props;
    this.isRemote = !Array.isArray(data);
  }

  public refresh() {
    if (this.isRemote && this.tableRef.current) {
      this.tableRef.current.onQueryChange({} as any);
    } else {
      this.forceUpdate();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <S.GridContainer>
        <MaterialTable
          {...this.props}
          data={data}
          icons={S.tableIcons}
          localization={localization}
          tableRef={this.tableRef}
        />
      </S.GridContainer>
    );
  }
}
