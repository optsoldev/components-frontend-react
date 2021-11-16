import { useEffect, useState } from 'react';
import { Filtro } from '../../../../shared/Filtro';
import { RotaAtualProps } from '../../../../shared/RotaAtualProps';
import { useRegistroService } from '../../services/registro.service';
import { FiltroRegistroSidebarView } from './FiltroRegistroSidebarView';

export const FiltroRegistroSidebar = ({ rotaAtual }: RotaAtualProps) => {
  const [filtros, setFiltros] = useState<Filtro[]>([]);
  const [loading, setLoading] = useState(false);

  const { listarFiltros } = useRegistroService();

  async function pesquisar(termo?: string) {
    try {
      setLoading(true);
      const result = await listarFiltros(termo);

      setTimeout(() => {
        setFiltros(result);
        setLoading(false);
      }, 1800);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pesquisar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FiltroRegistroSidebarView rotaAtual={rotaAtual} data={filtros} pesquisar={pesquisar} loading={loading} />;
};
