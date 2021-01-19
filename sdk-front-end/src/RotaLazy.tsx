import React, { useEffect } from 'react';
import { useBreadcrumb } from './lib/contexts/breadcrumb/breadcrumbContext';

export const RotaLazy = () => {
  const { setDictionary } = useBreadcrumb();

  useEffect(() => {
    // um alerta será emitido quando não encontrar correspondencias para as keys fornecidas ao dicionário
    setDictionary(['lazy', 'Rota Lazy'], ['laazy', 'ABC'], ['lazy', 'FGH']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Parabéns!</h3>
      <p>Esta é a rota lazy!</p>
    </div>
  );
};

export default RotaLazy;
