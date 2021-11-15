import { OptSidebarFilterContainer, OptSearchField, OptFilterLink, OptLoading } from '@optsol/react';
import { ColorPalette } from '../../../../shared/colors';
import { Filtro } from '../../../../shared/Filtro';
import { RotaAtualProps } from '../../../../shared/RotaAtualProps';
import { Routes } from '../../routes/SideAppSample.routes';

interface Props extends RotaAtualProps {
  data: Filtro[];
  pesquisar: (termo?: string) => void;
  loading: boolean;
}

export const FiltroRegistroSidebarView = ({ data, rotaAtual, pesquisar, loading }: Props) => {
  return (
    <OptSidebarFilterContainer borderColor={rotaAtual ? 'unset' : ColorPalette.gray5} goBackRoute={Routes.Home}>
      <OptSearchField onSearch={pesquisar} paddingX={12} noBorder />

      {data &&
        !loading &&
        data.map((situacao) => (
          <OptFilterLink
            key={situacao.id}
            to={Routes.Registro.Filtros(situacao.id.toString()).Principal}
            name={situacao.nome}
            total={situacao.total}
          />
        ))}

      {loading && <OptLoading size={40} />}
    </OptSidebarFilterContainer>
  );
};
