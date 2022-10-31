import { mdiPencil, mdiThumbUp, mdiThumbDown, mdiFileMultiple, mdiCloseCircle } from '@mdi/js';
import { useEffect } from 'react';
import { useBreadcrumb, OptActionToolbar, OptActionButton } from '@optsol/react';
import { ColorPalette } from '../../shared/colors';

export const RotaLazy = () => {
  const { setDictionary } = useBreadcrumb();

  useEffect(() => {
    // um alerta será emitido quando não encontrar correspondencias para as keys fornecidas ao dicionário
    setDictionary(['lazy', 'Rota Lazy'], ['laazy', 'ABC'], ['lazy', 'FGH']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <OptActionToolbar title="Rota Lazy" goBackRoute="home">
        <OptActionButton startIcon={{ path: mdiPencil, color: ColorPalette.curiousBlue }}>Editar</OptActionButton>
        <OptActionButton startIcon={{ path: mdiThumbUp, color: ColorPalette.primary }}>
          Aprovar proposta
        </OptActionButton>
        <OptActionButton startIcon={{ path: mdiThumbDown, color: ColorPalette.ketchup }} loading>
          Reprovar proposta
        </OptActionButton>
        <OptActionButton startIcon={{ path: mdiFileMultiple, color: ColorPalette.secondary }} disabled>
          Anexos
        </OptActionButton>
        <OptActionButton startIcon={{ path: mdiCloseCircle, color: ColorPalette.ketchup }}>
          Cancelar proposta
        </OptActionButton>
      </OptActionToolbar>

      <h3>Parabéns!</h3>
      <p>Esta é a rota lazy!</p>
    </div>
  );
};

export default RotaLazy;
