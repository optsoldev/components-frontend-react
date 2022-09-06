import {
  mdiClockTimeFive,
  mdiForum,
  mdiKangaroo,
  mdiMusicRestSixteenth,
  mdiOneUp,
  mdiStarThreePoints,
  mdiTwoFactorAuthentication,
  mdiViewList,
} from "@mdi/js";
import { OptMenuSection, OptSideLayoutPortal } from "@optsol/react";
import { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppSideRegistroPortal } from "../AppSideRegistro/AppSideRegistro.routes";
import { AppSideListaRegistros } from "./AppSideListaRegistros";

export const AppSideListaRegistrosRoutes = () => {
  const location = useLocation();

  const sections = useMemo(
    (): OptMenuSection[] => [
      {
        items: [
          {
            icon: mdiViewList,
            path: `.`,
            title: "Principal",
            activeShouldBeExact: true,
          },
          {
            icon: mdiOneUp,
            path: `./1`,
            title: "Registro 1",
          },
          {
            icon: mdiTwoFactorAuthentication,
            path: `./2`,
            title: "Registro 2",
          },
          {
            icon: mdiStarThreePoints,
            path: `./3`,
            title: "Registro 3",
          },
          {
            icon: mdiForum,
            path: `./4`,
            title: "Registro 4",
          },
          {
            icon: mdiClockTimeFive,
            path: `./5`,
            title: "Registro 5",
          },
          {
            icon: mdiMusicRestSixteenth,
            path: `./6`,
            title: "Registro 6",
          },
          {
            icon: mdiKangaroo,
            path: `./1/item`,
            title: "Registro 1 Item 1",
            activeShouldBeExact: true,
          },
        ],
      },
    ],
    []
  );

  return (
    <OptSideLayoutPortal sections={sections}>
      <Routes>
        <Route path="/" element={<AppSideListaRegistros />} />
        <Route path=":id/*" element={<AppSideRegistroPortal />} />
      </Routes>
    </OptSideLayoutPortal>
  );
};
