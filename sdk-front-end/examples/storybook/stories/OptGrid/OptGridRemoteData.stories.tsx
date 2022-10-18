/* eslint-disable import/no-extraneous-dependencies */
import { mdiCheck, mdiDelete } from "@mdi/js";
import {
  OptGrid,
  OptGridOptions,
  OptGridProps,
  OptGridRef,
  OptGridRequest,
  OptGridResponse,
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
  title: "OptGrid",
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
  headerTitlePosition: "start" | "center" | "end";
  selection: boolean;
  bottomElement?: React.ReactNode;
  titleBgColor: string;
  headerBgColor: string;
}

export const OptGridRemota: Story<OptGridArgs> = ({
  title,
  search,
  actionsPosition,
  headerTitlePosition,
  onRowClick,
  onSelect,
  onDelete,
  onApprove,
  selection,
  bottomElement,
  titleBgColor,
  headerBgColor,
}) => {
  const options: OptGridOptions = {
    search,
    selection,
    bottomElement,
    titleBgColor,
    headerBgColor,
  };

  const ref = useRef<OptGridRef>();

  function recarregar() {
    ref.current?.refresh();
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
            width: 90,
            align: "center",
          },
          {
            title: "Id",
            field: "id",
            width: 80,
            hidden: true,
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
        headerTitlePosition={headerTitlePosition}
      />
    </React.Fragment>
  );
};

OptGridRemota.storyName = "Remote data Grid";

OptGridRemota.args = {
  title: "Remote grid",
  search: true,
  actionsPosition: "start",
  headerTitlePosition: "start",
  selection: false,
  bottomElement: "",
  titleBgColor: "",
  headerBgColor: "",
};

OptGridRemota.argTypes = {
  title: {
    defaultValue: "Remote grid",
    name: "Título",
  },
  search: {
    defaultValue: true,
    name: "Fast search",
  },
  actionsPosition: {
    defaultValue: "start",
    name: "Action column position",
  },
  headerTitlePosition: {
    defaultValue: "start",
    name: "Header title position",
  },
  selection: {
    defaultValue: false,
    name: "Selectable",
  },
  bottomElement: {
    name: "Bottom Element",
    options: ["SemBottomElement", "ComBottomElement"],
    mapping: {
      SemBottomElement: "",
      ComBottomElement: <p>BOTTOM ELEMENT</p>,
    },
  },
  titleBgColor: {
    defaultValue: "#fff",
    name: "Title Background Color",
  },
  headerBgColor: {
    defaultValue: "#fff",
    name: "Header Background Color",
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
