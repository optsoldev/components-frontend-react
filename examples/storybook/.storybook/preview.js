import { OptLayoutProvider } from "@optsol/react";
import { ColorPalette } from "../shared/colors";
import { GlobalTestStyles } from "../shared/global";

const theme = {
  light: {
    style: "soft",
    primary: ColorPalette.primary,
    primaryContrast: ColorPalette.white,
    secondary: ColorPalette.secondary,
    secondaryContrast: ColorPalette.white,
  },
};

export const decorators = [
  (Story) => (
    <OptLayoutProvider theme={theme}>
      <GlobalTestStyles />
      <Story />
    </OptLayoutProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
