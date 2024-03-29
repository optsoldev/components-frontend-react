/* eslint-disable import/no-extraneous-dependencies */
import { mdiDelete } from '@mdi/js';
import {
  OptGrid,
  OptGridOptions,
  OptGridProps,
  OptGridRef,
} from '@optsol/react';
import { Meta, Story } from '@storybook/react';
import React, { useRef } from 'react';
import { CSSObject } from 'styled-components';

interface Pessoa {
  id: number;
  user: {
    first_name: string;
    last_name: string;
  };
  avatar: string;
  points: number;
}

export default {
  title: 'OptGrid',
  component: OptGrid,
} as Meta;

const LOCAL_DATA = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    user: {
      first_name: 'George',
      last_name: 'Bluth',
    },
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    points: 539,
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    user: {
      first_name: 'Janet',
      last_name: 'Weaver',
    },
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    points: 1529,
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    user: {
      first_name: 'Emma',
      last_name: 'Wong',
    },
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
    points: 695,
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    user: {
      first_name: 'Eve',
      last_name: 'Holt',
    },
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    points: 510,
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    user: {
      first_name: 'Charles',
      last_name: 'Morris',
    },
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
    points: 475,
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    user: {
      first_name: 'Tracey',
      last_name: 'Ramos',
    },
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
    points: 1658,
  },
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    user: {
      first_name: 'Michael',
      last_name: 'Lawson',
    },
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    points: 1024,
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    user: {
      first_name: 'Lindsay',
      last_name: 'Ferguson',
    },
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    points: 957,
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    user: {
      first_name: 'Tobias',
      last_name: 'Funke',
    },
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    points: 427,
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    user: {
      first_name: 'Byron',
      last_name: 'Fields',
    },
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    points: 1165,
  },
];

interface OptGridArgs extends OptGridProps<Pessoa> {
  search: boolean;
  onDelete: (data: Pessoa) => string;
  actionsPosition: 'start' | 'end';
  selection: boolean;
  bottomElement?: React.ReactNode;
  disabledAction: boolean;
  headerStyle?: CSSObject;
  cellStyle?: CSSObject;
  rowStyle?: CSSObject;
  onRowClick: () => void;
  onSelect: () => void;
}

export const OptGridLocalData: Story<OptGridArgs> = ({
  search,
  headerStyle,
  cellStyle,
  rowStyle,
  actionsPosition,
  onRowClick,
  onSelect,
  onDelete,
  selection,
  bottomElement,
  disabledAction,
}) => {
  const options: OptGridOptions = {
    search,
    selection,
    bottomElement,
  };

  const ref = useRef<OptGridRef>(null);

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
        ref={ref}
        headerStyle={headerStyle}
        cellStyle={cellStyle}
        rowStyle={rowStyle}
        columns={[
          {
            title: 'Avatar',
            field: 'avatar',
            render: (rowData) => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.avatar}
                alt={rowData.avatar}
              />
            ),
            width: 90,
            align: 'center',
          },
          {
            title: 'Id',
            field: 'id',
            width: 120,
          },
          {
            title: 'Nome',
            field: 'user.first_name',
          },
          {
            title: 'Sobrenome',
            field: 'user.last_name',
          },
          {
            title: 'Pontos',
            field: 'points',
          },
        ]}
        data={LOCAL_DATA}
        options={options}
        onRowClick={onRowClick}
        onSelect={onSelect}
        actions={[
          (rowData: Pessoa) => ({
            icon: { path: mdiDelete },
            tooltip: 'Deletar usuário',
            onClick: () => onDelete(rowData),
            disabled: disabledAction,
          }),
        ]}
        actionsPosition={actionsPosition}
      />
    </React.Fragment>
  );
};

OptGridLocalData.storyName = 'Local data Grid';

OptGridLocalData.args = {
  search: true,
  actionsPosition: 'end',
  selection: false,
  bottomElement: '',
  disabledAction: false,
};
OptGridLocalData.argTypes = {
  search: {
    defaultValue: true,
    name: 'Fast search',
  },
  actionsPosition: {
    defaultValue: 'start',
    name: 'Action column position',
  },
  selection: {
    defaultValue: false,
    name: 'Selectable',
  },
  bottomElement: {
    name: 'Bottom Element',
    options: ['SemBottomElement', 'ComBottomElement'],
    mapping: {
      SemBottomElement: '',
      ComBottomElement: <p>BOTTOM ELEMENT</p>,
    },
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
    action: 'onRowClick fired',
    table: { disable: true },
  },
  onSelect: {
    action: (data: Pessoa) => 'onSelect fired ' + data,
    table: { disable: true },
  },
  onDelete: {
    action: (data: Pessoa) => 'onDelete fired ' + data,
    table: { disable: true },
  },
  disabledAction: {
    defaultValue: false,
    name: 'Disabled Action',
  },
  rowStyle: {},
  cellStyle: {},
  headerStyle: {},
};
