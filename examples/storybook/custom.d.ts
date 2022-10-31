/* eslint-disable @typescript-eslint/no-empty-interface */

import { OptFullTheme } from "@optsol/react";

declare module "styled-components" {
  export interface DefaultTheme extends OptFullTheme {}
}
