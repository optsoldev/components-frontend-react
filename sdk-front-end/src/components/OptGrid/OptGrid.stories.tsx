/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { createRef } from 'react';
import Delete from '@material-ui/icons/Delete';
import { OptGrid, OptGridOptions, OptGridProps, OptGridRequest, OptGridResponse } from '.';

interface Pessoa {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default {
  title: 'OptGrid',
  component: OptGrid,
} as Meta;

function carregar(query: OptGridRequest<Pessoa>): OptGridResponse<Pessoa> {
  let url = 'https://reqres.in/api/users?';
  url += 'per_page=' + query.pageSize;
  url += '&page=' + (query.page + 1);

  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      return {
        data: result.data as Pessoa[],
        page: result.page - 1,
        totalCount: result.total,
      };
    });
}

interface OptGridArgs extends OptGridProps<Pessoa> {
  title: string;
  search: boolean;
  onDelete: (data: Pessoa) => string;
  actionsPosition: 'start' | 'end';
  selection: boolean;
}

export const OptGridRemota: Story<OptGridArgs> = ({
  title,
  search,
  isLoading,
  actionsPosition,
  onRowClick,
  onDelete,
  selection,
}) => {
  const options: OptGridOptions<Pessoa> = {
    search,
    selection,
  };

  const ref = createRef<OptGrid<Pessoa>>();

  function recarregar() {
    ref.current?.refresh();
  }

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <button type="button" onClick={recarregar}>
          Recarregar
        </button>
      </div>

      <OptGrid
        title={title}
        ref={ref}
        columns={[
          {
            ...(true && ({ width: 120 } as object)),
            title: 'Avatar',
            field: 'avatar',
            render: (rowData) => (
              <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} alt={rowData.avatar} />
            ),
            width: 80,
          },
          {
            title: 'Id',
            field: 'id',
            type: 'string',
            width: 80,
          },
          {
            title: 'Nome',
            field: 'first_name',
            type: 'string',
          },
          {
            title: 'Sobrenome',
            field: 'last_name',
            type: 'string',
          },
        ]}
        data={carregar}
        options={options}
        isLoading={isLoading}
        onRowClick={onRowClick}
        actions={[
          (rowData) => ({
            icon: () => <Delete />,
            tooltip: 'Deletar usuário',
            onClick: () => onDelete(rowData),
            disabled: false,
          }),
        ]}
        actionsPosition={actionsPosition}
      />
    </>
  );
};

OptGridRemota.storyName = 'OptGrid Remota';

OptGridRemota.args = {
  title: 'Grid remota',
  search: true,
  isLoading: false,
  actionsPosition: 'start',
  selection: false,
};

OptGridRemota.argTypes = {
  title: {
    defaultValue: 'Grid remota',
    name: 'Título',
  },
  search: {
    defaultValue: true,
    name: 'Pesquisa rápida',
  },
  isLoading: {
    defaultValue: false,
    name: 'Carregando',
  },
  actionsPosition: {
    defaultValue: 'start',
    name: 'Posição da coluna de ações',
  },
  selection: {
    defaultValue: false,
    name: 'Selecionável',
  },
  data: {
    table: { disable: true },
  },
  options: {
    table: { disable: true },
  },
  actions: {
    table: { disable: true },
  },
  columns: {
    table: { disable: true },
  },
  onRowClick: {
    action: 'onRowClick clicked',
    table: { disable: true },
  },
  onDelete: {
    action: (data: Pessoa) => 'onDelete clicked' + data,
    table: { disable: true },
  },
};
