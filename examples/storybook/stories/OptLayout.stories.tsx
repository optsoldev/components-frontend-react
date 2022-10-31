// // also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { mdiAbTesting, mdiIdeogramCjk, mdiPacMan } from "@mdi/js";
// import Icon from "@mdi/react";
// import {
//   OptLayout,
//   OptLayoutProps,
//   OptLayoutProvider,
//   OptMenuSection,
//   OptTheme,
// } from "@optsol/react";
// import { Meta, Story } from "@storybook/react/types-6-0";
// import { Route, Switch } from "react-router-dom";
// import { ColorPalette } from "../shared/colors";

// export default {
//   title: "OptLayout",
//   component: OptLayout,
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// } as Meta;

// const sections: OptMenuSection[] = [
//   {
//     items: [
//       {
//         icon: <Icon size={1} path={mdiPacMan} />,
//         path: "/teste",
//         title: "Pacman",
//         activeShouldBeExact: true,
//       },
//       {
//         icon: <Icon size={1} path={mdiAbTesting} />,
//         path: "/",
//         title: "AbTesting",
//         activeShouldBeExact: true,
//       },
//     ],
//   },
//   {
//     items: [
//       {
//         icon: <Icon size={1} path={mdiIdeogramCjk} />,
//         path: "/",
//         title: "Ideogram",
//         activeShouldBeExact: true,
//       },
//     ],
//   },
// ];

// const RotaPrincipal = () => {
//   return <h1>Rota principal</h1>;
// };
// const RotaTeste = () => {
//   return <h1>Rota teste</h1>;
// };

// const routes = (
//   <Switch>
//     <Route path="/teste" component={RotaTeste} />
//     <Route exact path="/" component={RotaPrincipal} />
//   </Switch>
// );

// const theme: OptTheme = {
//   light: {
//     style: "soft",
//     primary: ColorPalette.primary,
//     primaryContrast: ColorPalette.white,
//     secondary: ColorPalette.secondary,
//     secondaryContrast: ColorPalette.white,
//   },
// };

// const Template: Story<OptLayoutProps> = (args) => (
//   <OptLayoutProvider theme={theme}>
//     <OptLayout {...args} />
//   </OptLayoutProvider>
// );

// export const OptLayoutExample = Template.bind({});
// OptLayoutExample.args = {
//   routes,
//   sections,
// };

// OptLayoutExample.storyName = "Opt Layout";
