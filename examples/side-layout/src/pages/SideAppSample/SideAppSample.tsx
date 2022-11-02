import { mdiBellOutline } from "@mdi/js";
import { version } from "react";
import { OptSideLayout } from "@optsol/react";
import { routes } from "./routes/SideAppSample.routes";
import { sections } from "./SideAppSample.sections";

export const SideAppSample = () => {
  return (
    <OptSideLayout
      sections={sections}
      routes={routes}
      onLogout={() => {
        console.log("onLogout");
      }}
      onManageProfile={() => {
        console.log("onManageProfile");
      }}
      appBarConfig={{
        actions: [
          {
            icon: mdiBellOutline,
            onClick: () => {
              console.log("Notificações");
            },
            title: "Notificações",
          },
        ],
        hideLinkDescription: true,
        sideAppbarWidth: 100,
      }}
      profile={{
        email: "usuario@optsol.com.br",
        name: "Usuário A B",
        avatarSrc: undefined,
      }}
      version={`Versão ${version}`}
    />
  );
};
