import React from 'react';
import { RotaAtualProps } from '../../../../shared/RotaAtualProps';
import { useRegistroService } from '../../services/registro.service';
import { ListaRegistroSidebarView } from './ListaRegistroSidebarView';

interface Props extends RotaAtualProps {
  filtro: string;
}

export const ListaRegistroSidebar = ({ rotaAtual, filtro }: Props) => {
  const { buscar } = useRegistroService();

  function carregar(search: string, page: number, pageSize: number) {
    return buscar(page, pageSize);
  }

  return <ListaRegistroSidebarView carregar={carregar} rotaAtual={rotaAtual} filtro={filtro} />;
};
