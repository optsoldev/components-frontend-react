import { mdiCodeArray, mdiIdeogramCjk, mdiPacMan } from "@mdi/js";
import { OptMenuSection, OptSideLayout } from "@optsol/react";
import Logo from "../assets/optsol.png";
import { routes } from "../routes/index.routes";
import { BASE_CONFIG } from "../shared/baseConfig";

const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: mdiPacMan,
        path: "/",
        title: "Início",
        activeShouldBeExact: true,
      },
    ],
  },
  {
    items: [
      {
        icon: mdiIdeogramCjk,
        path: "/registros",
        title: "Registros",
      },
      {
        icon: mdiIdeogramCjk,
        path: "/registros/1",
        title: "Registro 1 Item 1",
        activeShouldBeExact: true,
      },
    ],
  },
];

function App() {
  return (
    <OptSideLayout
      sections={sections}
      routes={routes}
      logo={{
        icon: <img src={Logo} width={48} height={48} alt="logo" />,
        iconColor: "#fff",
        path: "/",
      }}
      onLogout={() => {
        console.log("onLogout");
      }}
      onManageProfile={() => {
        console.log("onManageProfile");
      }}
      appBarConfig={{
        sectionsAlignment: "center",
        sideAppbarWidth: 75,
        hideLinkDescription: true,
        actions: [
          {
            icon: mdiCodeArray,
            onClick: () => {
              console.log("1");
            },
            title: "Alguma coisa 1",
          },
        ],
      }}
      profile={{
        email: "usuario@optsol.com.br",
        name: "Usuário A B",
        avatarSrc: undefined,
      }}
      version={`Versão ${BASE_CONFIG.App.Version}`}
    />
  );
}

export default App;
