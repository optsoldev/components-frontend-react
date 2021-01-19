import { Switch } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useBreadcrumb } from './lib/contexts/breadcrumb/breadcrumbContext';
import { useOptTheme } from './lib/contexts/theme/themeContext';
import { ColorPalette } from './lib/shared/styles/colors';

export const RotaPrincipal = () => {
  const { setDictionary } = useBreadcrumb();
  const {
    setCustomTheme,
    setDarkTheme,
    state: { usingDarkTheme },
  } = useOptTheme();

  function handleCustomTheme() {
    setCustomTheme({
      dark: {
        primary: ColorPalette.green,
        appBar: {
          background: ColorPalette.curiousBlue,
        },
      },
      light: {
        primary: ColorPalette.ketchup,
        appBar: {
          background: ColorPalette.green,
        },
      },
    });
  }

  useEffect(() => {
    setDictionary(['home', 'Início']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h4>Esta é a rota principal!</h4>
      <button type="button" onClick={handleCustomTheme}>
        Customizar tema
      </button>

      <p>Tema dark</p>
      <Switch
        checked={usingDarkTheme}
        onChange={() => setDarkTheme(!usingDarkTheme)}
        name="toggle-dark-theme"
        color="primary"
      />

      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
      <p>Aumentando a tela</p>
    </div>
  );
};
