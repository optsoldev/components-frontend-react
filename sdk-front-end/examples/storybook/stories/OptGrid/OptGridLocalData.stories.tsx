/* eslint-disable import/no-extraneous-dependencies */
import { mdiDelete } from "@mdi/js";
import { OptGrid, OptGridOptions, OptGridProps, OptGridRef } from "@optsol/react";
import { Meta, Story } from "@storybook/react";
import React, { useRef } from "react";

interface Pessoa {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default {
  title: "OptGrid Local",
  component: OptGrid,
} as Meta;

const LOCAL_DATA = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];

interface OptGridArgs extends OptGridProps<Pessoa> {
  title: string;
  search: boolean;
  onDelete: (data: Pessoa) => string;
  actionsPosition: "start" | "end";
  selection: boolean;
}

export const OptGridLocalData: Story<OptGridArgs> = ({
  title,
  search,
  actionsPosition,
  onRowClick,
  onSelect,
  onDelete,
  selection,
}) => {
  const options: OptGridOptions = {
    search,
    selection,
  };

  const ref = useRef<OptGridRef>();

  function recarregar() {
    ref.current.refresh();
  }

  return (
    <React.Fragment>
      <div style={{ marginBottom: 20 }}>
        <button type="button" onClick={recarregar}>
          Recarregar
        </button>
      </div>

      <OptGrid
        title={title}
        ref={ref}
        columns={[
          {
            title: "Avatar",
            field: "avatar",
            render: (rowData) => (
              <img
                style={{ height: 36, borderRadius: "50%" }}
                src={rowData.avatar}
                alt={rowData.avatar}
              />
            ),
            width: 80,
            align: "center",
          },
          {
            title: "Id",
            field: "id",
            width: 120,
          },
          {
            title: "Nome",
            field: "first_name",
          },
          {
            title: "Sobrenome",
            field: "last_name",
          },
        ]}
        data={LOCAL_DATA}
        options={options}
        onRowClick={onRowClick}
        onSelect={onSelect}
        actions={[
          (rowData) => ({
            icon: { path: mdiDelete },
            tooltip: "Deletar usuário",
            onClick: () => onDelete(rowData),
            disabled: false,
          }),
        ]}
        actionsPosition={actionsPosition}
      />
    </React.Fragment>
  );
};

OptGridLocalData.storyName = "OptGrid Local";

OptGridLocalData.args = {
  title: "Grid sem dados remotos",
  search: true,
  actionsPosition: "start",
  selection: false,
};
OptGridLocalData.argTypes = {
  title: {
    defaultValue: "Grid sem dados remotos",
    name: "Título",
  },
  search: {
    defaultValue: true,
    name: "Pesquisa rápida",
  },
  isLoading: {
    defaultValue: false,
    name: "Carregando",
  },
  actionsPosition: {
    defaultValue: "start",
    name: "Posição da coluna de ações",
  },
  selection: {
    defaultValue: false,
    name: "Selecionável",
  },
  ref: {
    table: { disable: true },
  },
  data: {
    table: { disable: true },
  },
  options: {
    table: { disable: true },
  },
  actions: {
    table: { disable: true },
  },
  columns: {
    table: { disable: true },
  },
  onRowClick: {
    action: "onRowClick fired",
    table: { disable: true },
  },  
  onSelect: {
    action: (data) => "onSelect fired " + data,
    table: { disable: true },
  },
  onDelete: {
    action: (data: Pessoa) => "onDelete fired " + data,
    table: { disable: true },
  },
};
