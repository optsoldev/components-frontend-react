import { mdiOneUp, mdiViewList } from "@mdi/js";
import { OptMenuSection, OptSideLayoutPortal } from "@optsol/react";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { AppSideRegistroItem } from "../AppSideRegistroItem";
import { AppSideRegistro } from "./AppSideRegistro";

export const AppSideRegistroPortal = () => {
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
            path: `./item`,
            title: "Item",
          },
        ],
      },
    ],
    []
  );

  return (
    <OptSideLayoutPortal sections={sections}>
      <Routes>
        <Route path="/" element={<AppSideRegistro />} />
        <Route path="/item" element={<AppSideRegistroItem />} />
      </Routes>
    </OptSideLayoutPortal>
  );
};
