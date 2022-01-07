import { OptTheme } from "@optsol/react";
import { ColorPalette } from "./colors";

export const TEST_THEME: OptTheme = {
  light: {
    style: "soft",
    primary: ColorPalette.primary,
    primaryContrast: ColorPalette.white,
    secondary: ColorPalette.secondary,
    secondaryContrast: ColorPalette.white,
  },
};
