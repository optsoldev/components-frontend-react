import { OptLayoutProvider } from "@optsol/react";
import { PropsWithChildren } from "react";
import { theme } from "../shared/theme";

const AppProviders = ({ children }: PropsWithChildren) => {
  return <OptLayoutProvider theme={theme}>{children}</OptLayoutProvider>;
};

export default AppProviders;
