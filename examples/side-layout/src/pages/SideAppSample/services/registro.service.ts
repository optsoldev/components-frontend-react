import { OptSearchResponse } from '@optsol/react';

import { Filtro } from '../../../shared/Filtro';
import { PostMock } from '../../../shared/PostMock';

import { usersMock } from './usersMock';

export function useRegistroService() {
  async function listarFiltros(termo?: string) {
    console.log(termo);
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: PostMock[]) => {
        const filtros: Filtro[] = [];

        usersMock.forEach((user) => {
          const total =
            data.filter((x) => x.userId === user.id)?.length + 1 ?? 0;

          filtros.push({
            id: user.id,
            nome: user.name,
            total,
          });
        });

        return filtros;
      });
  }

  async function buscar(page: number, pageSize: number) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: PostMock[]) => {
        const total = data.length;

        const startIndex = page * pageSize;
        const dataMock = data.splice(startIndex, pageSize);

        const response: OptSearchResponse<PostMock> = {
          data: dataMock,
          page,
          pageSize,
          total,
        };

        return response;
      });
  }

  return {
    listarFiltros,
    buscar,
  };
}
