/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
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
}

export const OptGridTest: Story<OptGridArgs> = ({ title, search, isLoading, ...props }) => {
  const options: OptGridOptions<Pessoa> = {
    search,
    tableLayout: 'fixed',
  };

  return (
    <OptGrid
      title={title}
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          render: (rowData) => (
            <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} alt={rowData.avatar} />
          ),
          headerStyle: {
            width: 160,
          },
        },
        {
          title: 'Id',
          field: 'id',
          type: 'string',
          headerStyle: {
            width: 160,
          },
        },
        {
          title: 'Nome',
          field: 'first_name',
          type: 'string',
          headerStyle: {
            width: 'auto',
          },
        },
        {
          title: 'Sobrenome',
          field: 'last_name',
          type: 'string',
          headerStyle: {
            width: 'auto',
          },
        },
      ]}
      data={carregar}
      options={options}
      isLoading={isLoading}
    />
  );
};

OptGridTest.args = {
  title: 'Grid remota',
  search: true,
  isLoading: false,
};

OptGridTest.argTypes = {
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
  data: {
    table: { disable: true },
  },
  options: {
    table: { disable: true },
  },
};
