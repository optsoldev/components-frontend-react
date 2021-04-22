import { Filtro } from '../../../shared/Filtro';
import { PostMock } from '../../../shared/PostMock';
import { usersMock } from './usersMock';

export function useRegistroService() {
  async function listarFiltros(termo?: string) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: PostMock[]) => {
        const filtros: Filtro[] = [];

        usersMock.forEach((user) => {
          const total = data.filter((x) => x.userId === user.id)?.length + 1 ?? 0;

          filtros.push({
            id: user.id,
            nome: user.name,
            total,
          });
        });

        return filtros;
      });
  }

  return {
    listarFiltros,
  };
}
