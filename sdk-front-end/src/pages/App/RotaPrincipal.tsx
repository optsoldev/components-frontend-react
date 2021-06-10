import { Switch } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useBreadcrumb } from '../../lib/contexts/breadcrumb/breadcrumbContext';
import { useOptTheme } from '../../lib/contexts/theme/themeContext';
import { ColorPalette } from '../../lib/shared/styles/colors';
import { transformTheme } from '../../lib/shared/styles/theme';

export const RotaPrincipal = () => {
  const { setDictionary } = useBreadcrumb();
  const {
    setCustomTheme,
    setDarkTheme,
    state: { usingDarkTheme },
  } = useOptTheme();

  function handleCustomTheme() {
    console.error('Não definido');
    setCustomTheme({
      dark: transformTheme({
        style: 'soft',
        primary: ColorPalette.green,
        primaryContrast: ColorPalette.black,
        secondary: ColorPalette.ketchup,
        secondaryContrast: ColorPalette.white,
      }),
      light: transformTheme({
        style: 'soft',
        primary: ColorPalette.royalBlue,
        primaryContrast: ColorPalette.white,
        secondary: ColorPalette.eclipseOrange,
        secondaryContrast: ColorPalette.black,
      }),
    });
  }

  useEffect(() => {
    setDictionary(['home', 'Início']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
      <p>
        Aumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando
        a telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a
        telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a telaAumentando a
        telaAumentando a telaAumentando a telaAumentando a telaAumentando a tela
      </p>
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
    </>
  );
};
