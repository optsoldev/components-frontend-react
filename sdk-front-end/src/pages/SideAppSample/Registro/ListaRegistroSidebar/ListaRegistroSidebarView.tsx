import React from 'react';
import { OptChip } from '../../../../lib/components/OptChip';
import { OptSidebarPaginatedListContainer } from '../../../../lib/components/OptSideLayout/extensions';
import { ColorPalette } from '../../../../lib/shared/styles/colors';
import { OptSearchResponse } from '../../../../lib/types/OptSearchResponse';
import { PostMock } from '../../../../shared/PostMock';
import { RotaAtualProps } from '../../../../shared/RotaAtualProps';
import { Routes } from '../../routes/SideAppSample.routes';

interface Props extends RotaAtualProps {
  carregar: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<PostMock>>;
  filtro: string;
}

export const ListaRegistroSidebarView = ({ carregar, filtro, rotaAtual }: Props) => {
  return (
    <OptSidebarPaginatedListContainer
      title="Registros"
      goBackRoute={Routes.Registro.Principal}
      createTo={Routes.Registro.Filtros(filtro).Criar}
      listItemTo={Routes.Registro.Filtros(filtro).Editar}
      load={carregar}
      background={rotaAtual ? ColorPalette.white : ColorPalette.gray6}
      borderColor={rotaAtual ? ColorPalette.gray6 : 'unset'}
      render={(data: PostMock) => (
        <>
          <h4 style={{ fontSize: 16 }}>{data.title}</h4>

          <div>
            <OptChip label={data.id} textcolor={ColorPalette.white} backgroundcolor={ColorPalette.royalBlue} />
          </div>
        </>
      )}
    />
  );
};
