/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptSearchResponse } from '../../types/OptSearchResponse';
import { OptChip } from '../OptChip';
import { OptInfiniteScrollList } from './OptInfiniteScrollList';

interface Pessoa {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export default {
  title: 'OptInfiniteScrollList',
  component: OptInfiniteScrollList,
} as Meta;

function carregar(search: string, page: number, pageSize: number): Promise<OptSearchResponse<Pessoa>> {
  let url = 'https://reqres.in/api/users?';
  url += 'per_page=' + pageSize;
  url += '&page=' + (page + 1);

  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const result: OptSearchResponse<Pessoa> = {
        data: response.data,
        page: response.page,
        total: response.total,
        pageSize: 10,
      };

      return result;
    });
}

interface OptInfiniteScrollListArgs {}

export const OptInfiniteScrollListRemota: Story<OptInfiniteScrollListArgs> = () => {
  return (
    <OptInfiniteScrollList
      carregar={carregar}
      onError={() => {}}
      renderItem={(data, index) => (
        <div key={data.id}>
          <h4>
            {data.first_name} {data.last_name}
          </h4>
          <OptChip label={data.email} size="small" />

          <p>Index {index}</p>
        </div>
      )}
      pageSize={10}
      semPesquisa
    />
  );
};

OptInfiniteScrollListRemota.storyName = 'OptInfiniteScrollList Remota';

OptInfiniteScrollListRemota.args = {};

OptInfiniteScrollListRemota.argTypes = {};
