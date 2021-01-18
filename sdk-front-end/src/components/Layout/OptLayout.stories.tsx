// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { mdiPacMan, mdiAbTesting, mdiIdeogramCjk } from '@mdi/js';
import Icon from '@mdi/react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { OptMenuSection } from '../Drawer';
import { OptLayout, OptLayoutProps } from './OptLayout';

export default {
  title: 'Layout',
  component: OptLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: <Icon size={1} path={mdiPacMan} />,
        path: '/teste',
        title: 'Pacman',
        activeShouldBeExact: true,
      },
      {
        icon: <Icon size={1} path={mdiAbTesting} />,
        path: '/',
        title: 'AbTesting',
        activeShouldBeExact: true,
      },
    ],
  },
  {
    items: [
      {
        icon: <Icon size={1} path={mdiIdeogramCjk} />,
        path: '/',
        title: 'Ideogram',
        activeShouldBeExact: true,
      },
    ],
  },
];

const RotaPrincipal = () => {
  return <h1>Rota principal</h1>;
};
const RotaTeste = () => {
  return <h1>Rota teste</h1>;
};

const routes = (
  <Switch>
    <Route path="/teste" component={RotaTeste} />
    <Route exact path="/" component={RotaPrincipal} />
  </Switch>
);

const Template: Story<OptLayoutProps> = (args) => <OptLayout {...args} />;

export const Principal = Template.bind({});
Principal.args = {
  routes,
  sections,
};
