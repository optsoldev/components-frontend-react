/* eslint-disable import/no-extraneous-dependencies */
import { mdiCheck, mdiDelete } from "@mdi/js";
import {
  OptGrid,
  OptGridOptions,
  OptGridProps,
  OptGridRef,
  OptGridRequest,
  OptGridResponse
} from "@optsol/react";
import { Meta, Story } from "@storybook/react";
import React, { useRef } from "react";
import { ColorPalette } from "../../shared/colors";

interface Pessoa {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default {
  title: "OptGrid Remota",
  component: OptGrid,
} as Meta;

function carregar(query: OptGridRequest): Promise<OptGridResponse<Pessoa>> {
  let url = "https://reqres.in/api/users?";
  url += "per_page=" + query.pageSize;
  url += "&page=" + (query.page + 1);

  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      return {
        data: result.data as Pessoa[],
        page: result.page - 1,
        totalCount: result.total,
      };
    });
}

interface OptGridArgs extends OptGridProps<Pessoa> {
  title: string;
  search: boolean;
  onDelete: (data: Pessoa) => string;
  onApprove: (data: Pessoa) => string;
  actionsPosition: "start" | "end";
  selection: boolean;
}

export const OptGridRemota: Story<OptGridArgs> = ({
  title,
  search,
  actionsPosition,
  onRowClick,
  onSelect,
  onDelete,
  onApprove,
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
            width: 80,
            hidden: true
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
        data={carregar}
        options={options}
        onRowClick={onRowClick}
        onSelect={onSelect}
        actions={[
          (rowData) => ({
            icon: { path: mdiDelete, color: ColorPalette.gray3 },
            tooltip: "Deletar usuário",
            onClick: () => onDelete(rowData),
            disabled: false,
          }),
          (rowData) => ({
            icon: { path: mdiCheck, color: ColorPalette.green2 },
            tooltip: "Aprovar usuário",
            onClick: () => onApprove(rowData),
            disabled: false,
          }),
        ]}
        actionsPosition={actionsPosition}
      />
    </React.Fragment>
  );
};

OptGridRemota.storyName = "OptGrid Remota";

OptGridRemota.args = {
  title: "Grid remota",
  search: true,
  actionsPosition: "start",
  selection: false,
};

OptGridRemota.argTypes = {
  title: {
    defaultValue: "Grid remota",
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
    action: "onRowClick clicked",
    table: { disable: true },
  },
  onDelete: {
    action: (data: Pessoa) => "onDelete clicked" + data,
    table: { disable: true },
  },
  onSelect: {
    action: (data) => "onSelect fired " + data,
    table: { disable: true },
  },
  onApprove: {
    action: (data: Pessoa) => "onApprove clicked" + data,
    table: { disable: true },
  },
};
