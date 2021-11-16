'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('@mdi/react');
var material = require('@mui/material');
var React = require('react');
var reactRouterDom = require('react-router-dom');
var styled = require('styled-components');
var js = require('@mdi/js');
var createStyles = require('@mui/styles/createStyles');
var makeStyles = require('@mui/styles/makeStyles');
var Draggable = require('react-draggable');
var reactTable = require('react-table');
var color = require('color');
var styles = require('@mui/material/styles');
var Select = require('react-select');
var CreatableSelect = require('react-select/creatable');
var reactDropzone = require('react-dropzone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var createStyles__default = /*#__PURE__*/_interopDefaultLegacy(createStyles);
var makeStyles__default = /*#__PURE__*/_interopDefaultLegacy(makeStyles);
var Draggable__default = /*#__PURE__*/_interopDefaultLegacy(Draggable);
var color__default = /*#__PURE__*/_interopDefaultLegacy(color);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var CreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(CreatableSelect);

const LocalStorageKeys = {
    DockedDrawer: 'OPTSOL_DOCKED_DRAWER',
    DarkTheme: 'OPTSOL_DARK_THEME',
};
const ActiveLinkClass = 'active-link';

var ThemeActions;
(function (ThemeActions) {
    ThemeActions["SET_LIGHT_THEME"] = "THEME_SET_LIGHT_THEME";
    ThemeActions["SET_DARK_THEME"] = "THEME_SET_DARK_THEME";
    ThemeActions["RESET_THEME"] = "THEME_RESET_THEME";
    ThemeActions["SET_CUSTOM_THEME"] = "THEME_SET_CUSTOM_THEME";
    ThemeActions["SET_CURRENT_SIDEAPPBARWIDTH"] = "THEME_SET_CURRENT_SIDEAPPBARWIDTH";
})(ThemeActions || (ThemeActions = {}));

function copyInto(to, from) {
    if (from) {
        Object.entries(from)
            .filter((kv) => kv[1])
            .forEach((kv) => {
            const [key, value] = kv;
            if (value) {
                if (typeof value === 'object') {
                    copyInto(to[key], value);
                }
                else {
                    to[key] = value;
                }
            }
        });
    }
    return to;
}
function generateNewTheme(theme, customTheme) {
    let newTheme = JSON.parse(JSON.stringify(theme));
    if (customTheme) {
        newTheme = copyInto(newTheme, customTheme);
    }
    return newTheme;
}

const ColorPalette = {
    primary: '#E06D37',
    primaryTints: {
        tint1: '#e37b4b',
        tint2: '#e68a5e',
        tint3: '#e99873',
        tint4: '#eca787',
        tint5: '#efb69b',
        tint6: '#f2c4af',
        tint7: '#f5d3c3',
        tint8: '#f8e1d7',
        tint9: '#fbf0eb',
    },
    secondary: '#6d37e0',
    black: '#000000',
    dark: '#1f1f1f',
    gray1: '#333333',
    gray2: '#4F4F4F',
    gray3: '#828282',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#F2F2F2',
    gray7: '#eeeeee',
    gray8: '#fefefe',
    white: '#ffffff',
    ketchup: '#EB5757',
    eclipseOrange: '#F2994A',
    yellow: '#e0c237',
    green: '#37e06d',
    green2: '#27AE60',
    green3: '#6FCF97',
    royalBlue: '#2F80ED',
    curiousBlue: '#2D9CDB',
    skyBlue: '#56CCF2',
    livePurple: '#9B51E0',
    royaltyPurple: '#BB6BD9',
};

const DarkTheme = {
    primary: ColorPalette.primary,
    primaryContrast: ColorPalette.white,
    secondary: ColorPalette.secondary,
    secondaryContrast: ColorPalette.white,
    background: ColorPalette.dark,
    color: ColorPalette.white,
    divider: ColorPalette.gray2,
    scrollbar: {
        background: ColorPalette.black,
        shadowColor: ColorPalette.gray2,
        topColor: ColorPalette.primaryTints.tint3,
        bottomColor: ColorPalette.primaryTints.tint5,
        hover: {
            topCollor: ColorPalette.primaryTints.tint1,
            bottomCollor: ColorPalette.primaryTints.tint3,
        },
    },
    breadcrumb: {
        color: ColorPalette.primaryTints.tint4,
        hover: ColorPalette.white,
        separator: ColorPalette.white,
    },
    appBar: {
        background: ColorPalette.black,
        color: ColorPalette.primary,
        boxShadowColor: ColorPalette.black,
        side: {
            divider: ColorPalette.dark,
            borderColor: ColorPalette.primary,
            link: {
                color: ColorPalette.white,
                active: {
                    color: ColorPalette.white,
                    background: ColorPalette.primary,
                },
                hover: {
                    background: ColorPalette.primaryTints.tint4,
                    color: ColorPalette.black,
                },
            },
        },
        menuButton: {
            color: ColorPalette.primary,
            hover: {
                color: ColorPalette.black,
                background: ColorPalette.primaryTints.tint2,
            },
        },
        avatar: {
            background: ColorPalette.green,
            color: ColorPalette.white,
        },
    },
    toolbar: {
        color: ColorPalette.white,
        background: ColorPalette.primary,
    },
    sidebar: {
        background: ColorPalette.black,
        color: ColorPalette.white,
        divider: ColorPalette.dark,
        link: {
            color: ColorPalette.white,
            active: {
                color: ColorPalette.white,
                background: ColorPalette.primary,
            },
            hover: {
                background: ColorPalette.primaryTints.tint4,
                color: ColorPalette.black,
            },
        },
    },
    drawer: {
        docked: {
            borderColor: ColorPalette.black,
        },
        close: {
            color: ColorPalette.primary,
            background: 'inherit',
        },
        versionColor: ColorPalette.gray5,
        background: ColorPalette.black,
        color: ColorPalette.black,
        divider: ColorPalette.gray1,
        link: {
            color: ColorPalette.white,
            active: {
                color: ColorPalette.white,
                background: ColorPalette.primary,
            },
            hover: {
                background: ColorPalette.primaryTints.tint4,
                color: ColorPalette.black,
            },
        },
    },
    inputs: {
        outline: ColorPalette.gray6,
        outlineFocus: ColorPalette.primary,
        outlineHover: ColorPalette.gray2,
    },
};

const LightTheme = {
    primary: ColorPalette.primary,
    primaryContrast: ColorPalette.white,
    secondary: ColorPalette.secondary,
    secondaryContrast: ColorPalette.black,
    background: ColorPalette.white,
    color: ColorPalette.gray2,
    divider: ColorPalette.gray6,
    appBar: {
        background: ColorPalette.primary,
        color: ColorPalette.white,
        boxShadowColor: 'rgba(0, 0, 0, 0.05)',
        side: {
            divider: ColorPalette.primaryTints.tint3,
            borderColor: ColorPalette.gray6,
            link: {
                color: ColorPalette.secondary,
                hover: {
                    background: ColorPalette.gray6,
                    color: ColorPalette.black,
                },
                active: {
                    background: ColorPalette.white,
                    color: ColorPalette.primary,
                },
            },
        },
        avatar: {
            background: ColorPalette.secondary,
            color: ColorPalette.white,
        },
        menuButton: {
            color: ColorPalette.secondary,
            hover: {
                background: ColorPalette.gray6,
                color: ColorPalette.secondary,
            },
        },
    },
    breadcrumb: {
        color: ColorPalette.gray2,
        hover: ColorPalette.primary,
        separator: ColorPalette.gray2,
    },
    drawer: {
        background: ColorPalette.white,
        color: ColorPalette.gray3,
        divider: ColorPalette.gray6,
        versionColor: ColorPalette.gray3,
        docked: {
            borderColor: ColorPalette.gray6,
        },
        close: {
            background: 'inherit',
            color: ColorPalette.secondary,
        },
        link: {
            color: ColorPalette.gray3,
            active: {
                background: ColorPalette.primary,
                color: ColorPalette.white,
            },
            hover: {
                background: ColorPalette.secondary,
                color: ColorPalette.white,
            },
        },
    },
    toolbar: {
        color: ColorPalette.gray2,
        background: ColorPalette.white,
    },
    sidebar: {
        background: ColorPalette.white,
        color: ColorPalette.gray3,
        divider: ColorPalette.gray6,
        link: {
            color: ColorPalette.gray3,
            active: {
                background: ColorPalette.primary,
                color: ColorPalette.white,
            },
            hover: {
                background: ColorPalette.secondary,
                color: ColorPalette.white,
            },
        },
    },
    scrollbar: {
        background: ColorPalette.white,
        topColor: ColorPalette.gray4,
        bottomColor: ColorPalette.gray5,
        hover: {
            topCollor: ColorPalette.gray4,
            bottomCollor: ColorPalette.gray4,
        },
        shadowColor: ColorPalette.gray6,
    },
    inputs: {
        outline: ColorPalette.gray6,
        outlineFocus: ColorPalette.primary,
        outlineHover: ColorPalette.gray5,
    },
};

const THEME_INITIAL_DISPATCH = (action) => {
    throw Error('Dispatch not implemented. Action: ' + action);
};
function ThemeReducer(state, action) {
    var _a;
    switch (action.type) {
        case ThemeActions.RESET_THEME: {
            const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);
            return Object.assign(Object.assign({}, state), { customTheme: {}, currentTheme: usingDarkTheme ? DarkTheme : LightTheme });
        }
        case ThemeActions.SET_DARK_THEME: {
            return Object.assign(Object.assign({}, state), { usingDarkTheme: true, currentTheme: action.payload });
        }
        case ThemeActions.SET_LIGHT_THEME: {
            return Object.assign(Object.assign({}, state), { usingDarkTheme: false, currentTheme: action.payload });
        }
        case ThemeActions.SET_CUSTOM_THEME: {
            const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);
            const currentTheme = generateNewTheme(usingDarkTheme ? state.theme.dark : state.theme.light, usingDarkTheme ? action.payload.dark : action.payload.light);
            return Object.assign(Object.assign({}, state), { customTheme: action.payload, currentTheme });
        }
        case ThemeActions.SET_CURRENT_SIDEAPPBARWIDTH: {
            return Object.assign(Object.assign({}, state), { currentSideAppbarWidth: action.payload });
        }
        default: {
            // eslint-disable-next-line
            throw new Error(`Ação não identificada: ${(_a = action) === null || _a === void 0 ? void 0 : _a.type}`);
        }
    }
}

const ScrollbarCSS = styled.css `
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      13deg,
      ${({ theme }) => theme.scrollbar.topColor} 14%,
      ${({ theme }) => theme.scrollbar.bottomColor} 64%
    );
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      13deg,
      ${({ theme }) => theme.scrollbar.hover.topCollor} 14%,
      ${({ theme }) => theme.scrollbar.hover.bottomCollor} 64%
    );
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.background};
    box-shadow: inset 7px 10px 12px ${({ theme }) => theme.scrollbar.shadowColor};
  }
`;

const sidebarMenuWidth = 88;
const activeLinkClass$2 = 'active-link';
const SidebarContainer = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: auto;
  border-right: 1px solid ${({ bordercolor, theme }) => bordercolor || theme.sidebar.divider};
  background: ${({ background, theme }) => background || theme.sidebar.background};
  color: ${({ color, theme }) => color || theme.sidebar.color};
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;
`;
SidebarContainer.defaultProps = {
    width: sidebarMenuWidth,
};
const SidebarWithToolbarContainer = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: auto;
  border-right: 1px solid ${({ bordercolor, theme }) => bordercolor || theme.sidebar.divider};
  background: ${({ background, theme }) => background || theme.sidebar.background};
  color: ${({ color, theme }) => color || theme.sidebar.color};
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;
`;
SidebarContainer.defaultProps = {
    width: sidebarMenuWidth,
};
const SidebarWithToolbarContent = styled__default["default"].div `
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ background, theme }) => background || theme.sidebar.background};
  color: ${({ color, theme }) => color || theme.sidebar.color};

  ${ScrollbarCSS}
`;
const SidebarListItem$1 = styled__default["default"](material.ListItem) `
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  border-radius: 6px;
  margin: 0 8px;
  width: auto;

  &.MuiListItem-gutters {
    padding: 8px;
  }
`;
const SidebarNavLink$1 = styled__default["default"](reactRouterDom.NavLink) `
  text-decoration: none;
  color: ${({ theme }) => theme.sidebar.link.color};

  transition: color ease-in-out 250ms;

  ${SidebarListItem$1} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.sidebar.link.hover.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.sidebar.link.hover.color} !important;
      fill: ${({ theme }) => theme.sidebar.link.hover.color} !important;
    }

    ${SidebarListItem$1} {
      background-color: ${({ theme }) => theme.sidebar.link.hover.background};
    }
  }

  &.${activeLinkClass$2} {
    color: ${({ theme }) => theme.sidebar.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.sidebar.link.active.color} !important;
      fill: ${({ theme }) => theme.sidebar.link.active.color} !important;
    }

    ${SidebarListItem$1} {
      background-color: ${({ theme }) => theme.sidebar.link.active.background};
    }
  }
`;
const CustomList$2 = styled__default["default"](material.List) `
  & ${SidebarNavLink$1}:not(:last-child) > div {
    margin-bottom: 6px;
  }
`;
const SidebarListItemIcon$1 = styled__default["default"](material.ListItemIcon) `
  min-width: auto;
  justify-content: center;
  color: ${({ theme }) => theme.sidebar.link.color};
`;
const SidebarListItemText$1 = styled__default["default"](material.ListItemText) `
  span {
    font-size: 10px;
    text-align: center;
  }
`;
const SidebarMenuDivider$2 = styled__default["default"](material.Divider) `
  background-color: ${({ theme }) => theme.sidebar.divider};
`;
const FooterActionsContainer$1 = styled__default["default"].div `
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  display: flex;
`;

const SidebarMenuDivider$1 = styled__default["default"](material.Divider) `
  background-color: ${({ theme }) => theme.appBar.side.divider};
`;
const FooterActionsContainer = styled__default["default"].div `
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ExpandedFooterActionsContainer = styled__default["default"](FooterActionsContainer) `
  align-items: flex-start;
`;
const CustomList$1 = styled__default["default"](material.List) `
  width: 100%;

  & ${SidebarNavLink$1}:not(:last-child) > div {
    margin-bottom: 6px;
  }
`;
const SidebarExpandedListItem = styled__default["default"](material.ListItem) `
  display: flex;
  font-size: 14px;
  border-radius: 6px;
  width: auto;

  & .MuiIconButton-root {
    padding: 0px;
  }
  &.MuiListItem-gutters {
    padding: 8px;
  }
`;
const SidebarExpandedListItemText = styled__default["default"](material.ListItemText) `
  span {
    font-weight: 500;
    margin-left: 10px;
  }
`;

const sideAppbarWidth = 50;
const expandedSideAppbarWidth = 260;
const activeLinkClass$1 = 'active-link';
const SidebarMenuContainer = styled__default["default"].div `
  ${({ expanded }) => expanded &&
    styled.css `
      width: ${expandedSideAppbarWidth}px;
      min-width: ${expandedSideAppbarWidth}px;
      max-width: ${expandedSideAppbarWidth}px;
    `}

  ${({ expanded }) => !expanded &&
    styled.css `
      width: ${sideAppbarWidth}px;
      min-width: ${sideAppbarWidth}px;
      max-width: ${sideAppbarWidth}px;
    `}

  transition: min-width ease-in-out 200ms;
  border-right: 1px solid ${({ theme }) => theme.appBar.side.borderColor};
  background: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 8px;

  ${ScrollbarCSS}

  @media (max-width: 600px) {
    display: none;
  }
`;
const SidebarListItem = styled__default["default"](material.ListItem) `
  display: flex;
  flex-direction: column;
  font-size: 10px;
  border-radius: 6px;
  margin: 0 0;
  width: auto;
  min-height: 30px;
  justify-content: center;

  &.MuiListItem-gutters {
    padding: 2px;
  }
`;
const SidebarNavLink = styled__default["default"](reactRouterDom.NavLink) `
  text-decoration: none;
  color: ${({ theme }) => theme.appBar.side.link.color};

  transition: color ease-in-out 250ms;

  ${SidebarListItem}, ${SidebarExpandedListItem} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.appBar.side.link.hover.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.appBar.side.link.hover.color} !important;
      fill: ${({ theme }) => theme.appBar.side.link.hover.color} !important;
    }

    ${SidebarListItem}, ${SidebarExpandedListItem} {
      background-color: ${({ theme }) => theme.appBar.side.link.hover.background};
    }
  }

  &.${activeLinkClass$1} {
    color: ${({ theme }) => theme.appBar.side.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.appBar.side.link.active.color} !important;
      fill: ${({ theme }) => theme.appBar.side.link.active.color} !important;
    }

    ${SidebarListItem}, ${SidebarExpandedListItem} {
      background-color: ${({ theme }) => theme.appBar.side.link.active.background};
    }
  }
`;
const CustomList = styled__default["default"](material.List) `
  width: 100%;

  & ${SidebarNavLink}:not(:last-child) > div {
    margin: 20px 0;
  }
`;
const SidebarListItemIcon = styled__default["default"](material.ListItemIcon) `
  min-width: auto;
  justify-content: center;
  color: ${({ theme }) => theme.appBar.side.link.color};
`;
const SidebarListItemText = styled__default["default"](material.ListItemText) `
  span {
    font-size: 10px;
    text-align: center;
  }
`;
const SidebarMenuDivider = styled__default["default"](material.Divider) `
  background-color: ${({ theme }) => theme.appBar.side.divider};
`;

const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);
const THEME_INITIAL_STATE = {
    usingDarkTheme,
    customTheme: {},
    theme: { dark: DarkTheme, light: LightTheme },
    currentTheme: usingDarkTheme ? DarkTheme : LightTheme,
    currentSideAppbarWidth: sideAppbarWidth,
};

const ThemeStateContext = React.createContext(THEME_INITIAL_STATE);
const ThemeDispatchContext = React.createContext(THEME_INITIAL_DISPATCH);
function OptThemeProvider({ children }) {
    const [state, dispatch] = React.useReducer(ThemeReducer, THEME_INITIAL_STATE);
    return (jsxRuntime.jsx(ThemeStateContext.Provider, Object.assign({ value: state }, { children: jsxRuntime.jsx(ThemeDispatchContext.Provider, Object.assign({ value: dispatch }, { children: children }), void 0) }), void 0));
}
function useOptTheme() {
    const state = React__default["default"].useContext(ThemeStateContext);
    if (state === undefined) {
        throw new Error('useThemeState deve ser utilizando dentro de um ThemeProvider');
    }
    const dispatch = React__default["default"].useContext(ThemeDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useThemeDispatch deve ser utilizando dentro de um ThemeProvider');
    }
    const actions = ThemeActions;
    function setCurrentTheme(darkTheme) {
        if (darkTheme) {
            localStorage.setItem(LocalStorageKeys.DarkTheme, '1');
            const currentTheme = generateNewTheme(state.theme.dark, state.customTheme.dark);
            dispatch({ type: actions.SET_DARK_THEME, payload: currentTheme });
        }
        else {
            localStorage.removeItem(LocalStorageKeys.DarkTheme);
            const currentTheme = generateNewTheme(state.theme.light, state.customTheme.light);
            dispatch({ type: actions.SET_LIGHT_THEME, payload: currentTheme });
        }
    }
    function setCustomTheme(customTheme) {
        dispatch({ type: actions.SET_CUSTOM_THEME, payload: customTheme });
    }
    function resetTheme() {
        dispatch({ type: actions.RESET_THEME });
    }
    function setCurrentSideAppbarWidth(width) {
        dispatch({ type: actions.SET_CURRENT_SIDEAPPBARWIDTH, payload: width });
    }
    return {
        state,
        currentTheme: state.currentTheme,
        setDarkTheme: setCurrentTheme,
        setCustomTheme,
        resetTheme,
        setCurrentSideAppbarWidth,
    };
}

const drawerWidth = 250;
const activeLinkClass = 'active-link';
const DrawerMenuContainer = styled__default["default"].div `
  width: ${drawerWidth}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.drawer.background};
  overflow-y: auto;

  ${ScrollbarCSS}
`;
const CloseDrawerContainer = styled__default["default"].div `
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;

  & .MuiIconButton-root {
    padding: 0;
  }

  & svg {
    background: ${({ theme }) => theme.drawer.close.background};
    color: ${({ theme }) => theme.drawer.close.color};
    border-radius: 4px;
    padding: 10px;
  }
`;
const MenuListItem = styled__default["default"](material.ListItem) `
  margin: 0 16px;

  width: auto;
  border-radius: 6px;

  & > .MuiListItemIcon-root {
    min-width: auto;
    margin-right: 14px;
  }

  & > .MuiListItemText-root,
  & > .MuiListItemText-root > .MuiTypography-body1 {
    font-size: 14px;
  }
`;
const DrawerNavLink = styled__default["default"](reactRouterDom.NavLink) `
  text-decoration: none;
  color: ${({ theme }) => theme.drawer.link.color};

  transition: color ease-in-out 250ms;

  ${MenuListItem} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.drawer.link.hover.color};

    & svg,
    svg path {
      color: ${({ theme }) => theme.drawer.link.hover.color} !important;
      fill: ${({ theme }) => theme.drawer.link.hover.color} !important;
    }

    ${MenuListItem} {
      background-color: ${({ theme }) => theme.drawer.link.hover.background};
    }
  }

  &.${activeLinkClass} {
    color: ${({ theme }) => theme.drawer.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.drawer.link.active.color} !important;
      fill: ${({ theme }) => theme.drawer.link.active.color} !important;
    }

    ${MenuListItem} {
      background-color: ${({ theme }) => theme.drawer.link.active.background};
    }
  }
`;
const Footer = styled__default["default"].div `
  margin: auto 16px 32px 16px;
  display: flex;
  flex-direction: column;
`;
const FooterHeader = styled__default["default"].div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Version = styled__default["default"].p `
  color: ${({ theme }) => theme.drawer.versionColor};
  font-size: 12px;
`;

const appBarHeight$1 = 48;
const containerPadding = 12;
const Container = styled__default["default"].div `
  display: flex;
  flex: 1;
  margin-top: ${appBarHeight$1}px;
  min-height: calc(100vh - ${appBarHeight$1}px);
  height: 100%;
  max-width: 100vw;
`;
const ContentContainer = styled__default["default"].div `
  padding: ${containerPadding}px;
  flex: 1;
  overflow-wrap: anywhere;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  ${ScrollbarCSS};
`;
styled__default["default"].div `
  width: ${drawerWidth}px;
`;
styled__default["default"](material.List) `
  padding-top: 0;
  padding-bottom: 0;
`;
styled__default["default"](material.AppBar) `
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  ${({ theme }) => {
    var _a;
    return !!theme.appBar.noBoxShadow
        ? 'box-shadow: none'
        : `box-shadow: 0px -10px 10px 12px ${(_a = theme.appBar.boxShadowColor) !== null && _a !== void 0 ? _a : theme.appBar.background}`;
}};

  .MuiToolbar-regular {
    height: ${appBarHeight$1}px;
    min-height: ${appBarHeight$1}px;
  }

  & svg {
    color: ${({ theme }) => theme.appBar.color};
  }

  @media (min-width: 600px) {
    .MuiToolbar-gutters {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
styled__default["default"].div `
  width: ${sidebarMenuWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: auto;
    align-items: flex-start;
  }
`;
styled__default["default"].div `
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > :last-child {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    flex: 1;
  }
`;
styled__default["default"](material.IconButton) `
  padding: 10px;
  margin-left: 0;

  svg {
    color: ${({ theme }) => theme.appBar.menuButton.color};
  }

  &:hover {
    background-color: ${({ theme }) => theme.appBar.menuButton.hover.background};

    svg {
      color: ${({ theme }) => theme.appBar.menuButton.hover.color};
    }
  }
`;
styled__default["default"](material.Popover) `
  & > .MuiPaper-rounded {
    min-width: 200px;
    display: block;
    border-radius: 8px;
  }

  & .MuiPaper-elevation8 {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  }

  & ul {
    width: 100%;
  }
`;
styled__default["default"].div `
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
styled__default["default"].div `
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
`;
styled__default["default"].div `
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
`;
styled__default["default"](material.MenuList) `
  & li {
    border-top: 1px solid ${({ theme }) => theme.divider};
    height: 52px;
  }

  & svg {
    margin-right: 8px;
  }
`;
styled__default["default"].div `
  ${(props) => props.marginLeft && 'margin-left: 32px;'}
  display: flex;
  flex: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;
const DockedDrawerContainer = styled__default["default"].div `
  border-right: 1px solid ${({ theme }) => theme.drawer.docked.borderColor};
`;

const CustomToolbar = styled__default["default"](material.Toolbar) `
  min-height: 65px;
  ${({ $noborder, theme }) => !$noborder && `border-bottom: 1px solid ${theme.divider};`}
  ${({ $nopadding }) => ($nopadding ? `padding: 0;` : `padding: 10px;`)}

  color: ${({ color }) => color !== null && color !== void 0 ? color : 'inherit'};
  background: ${({ background }) => background !== null && background !== void 0 ? background : 'inherit'};

  ${({ clearmargin }) => !!clearmargin
    ? 'margin: unset'
    : `margin: -${containerPadding}px -${containerPadding}px ${containerPadding}px -${containerPadding}px`};
`;
CustomToolbar.defaultProps = {
    $noborder: false,
    $nopadding: false,
};
const CustomIconButton = styled__default["default"](material.IconButton) `
  margin-right: 8px;
`;
const ActionsContainer = styled__default["default"].div `
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  color: ${({ color }) => color !== null && color !== void 0 ? color : 'inherit'};
`;
const Title$1 = styled__default["default"].span `
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ color }) => color !== null && color !== void 0 ? color : 'inherit'};
`;
const CustomButton = styled__default["default"](material.Button) `
  color: ${(props) => { var _a; return (_a = props.textcolor) !== null && _a !== void 0 ? _a : 'inherit'; }};

  &:hover {
    &.MuiButton-root {
      color: ${(props) => { var _a, _b; return (_b = (_a = props.hover) === null || _a === void 0 ? void 0 : _a.textcolor) !== null && _b !== void 0 ? _b : 'inherit'; }};
    }
  }
`;

function checkActionIcon(theme, icon, disabled, loading) {
    if (icon) {
        if (loading) {
            icon = icon;
            icon = jsxRuntime.jsx(material.CircularProgress, { size: 18, style: { color: theme.primary } }, void 0);
        }
        else if (typeof icon === 'object') {
            icon = icon;
            icon.color = loading || disabled ? theme.color : icon.color || theme.primary;
            icon = jsxRuntime.jsx(Icon__default["default"], { path: icon.path, size: 0.8, color: icon.color }, void 0);
        }
    }
    return icon;
}
const OptActionButton = ({ startIcon, endIcon, onClick, children, disabled, loading, textColor = 'inherit', hover, }) => {
    var _a;
    const { currentTheme } = useOptTheme();
    let hoverTextColor = (_a = hover === null || hover === void 0 ? void 0 : hover.textColor) !== null && _a !== void 0 ? _a : 'inherit';
    if (startIcon && startIcon.color) {
        hoverTextColor = startIcon.color;
    }
    if (endIcon && endIcon.color) {
        hoverTextColor = endIcon.color;
    }
    startIcon = checkActionIcon(currentTheme, startIcon, !!disabled, !!loading);
    endIcon = checkActionIcon(currentTheme, endIcon, !!disabled, !!loading);
    return (jsxRuntime.jsx(CustomButton, Object.assign({ textcolor: textColor, hover: { textcolor: hoverTextColor }, startIcon: startIcon, endIcon: endIcon, onClick: onClick, disabled: disabled || loading, style: { textTransform: 'inherit' } }, { children: children }), void 0));
};

const OptActionToolbar = ({ title, children, goBackRoute, clearMargin = false, background, color, noBorder = false, noPadding = false, }) => {
    const theme = useOptTheme();
    color = color !== null && color !== void 0 ? color : theme.currentTheme.toolbar.color;
    background = background !== null && background !== void 0 ? background : theme.currentTheme.toolbar.background;
    title = typeof title === 'string' ? jsxRuntime.jsx(Title$1, Object.assign({ color: color }, { children: title }), void 0) : title;
    return (jsxRuntime.jsxs(CustomToolbar, Object.assign({ clearmargin: clearMargin ? 1 : 0, className: "opt-toolbar", background: background, color: color, "$noborder": noBorder, "$nopadding": noPadding }, { children: [goBackRoute && (jsxRuntime.jsx(reactRouterDom.NavLink, Object.assign({ to: goBackRoute }, { children: jsxRuntime.jsx(CustomIconButton, { children: jsxRuntime.jsx(Icon__default["default"], { size: 0.8, path: js.mdiArrowLeft, color: color }, void 0) }, void 0) }), void 0)), title, jsxRuntime.jsx(ActionsContainer, Object.assign({ color: color }, { children: children }), void 0)] }), void 0));
};

var BreadcrumbActions;
(function (BreadcrumbActions) {
    BreadcrumbActions["SET_VALUES"] = "BREADCRUMB_SET_VALUES";
    BreadcrumbActions["RESET_VALUES"] = "BREADCRUMB_RESET_VALUES";
})(BreadcrumbActions || (BreadcrumbActions = {}));

const BREADCRUMB_INITIAL_DISPATCH = (action) => {
    throw Error('Dispatch not implemented. Action: ' + action);
};
function BreadcrumbReducer(state, action) {
    var _a;
    switch (action.type) {
        case BreadcrumbActions.SET_VALUES: {
            const newDictionary = [];
            if (action.payload) {
                action.payload.forEach((p) => {
                    newDictionary.push(p);
                });
            }
            return Object.assign(Object.assign({}, state), { dictionary: newDictionary });
        }
        case BreadcrumbActions.RESET_VALUES: {
            return Object.assign(Object.assign({}, state), { dictionary: [] });
        }
        default: {
            // eslint-disable-next-line
            throw new Error(`Ação não identificada: ${(_a = action) === null || _a === void 0 ? void 0 : _a.type}`);
        }
    }
}

const BREADCRUMB_INITIAL_STATE = {
    dictionary: [],
};

const BreadcrumbStateContext = React.createContext(BREADCRUMB_INITIAL_STATE);
const BreadcrumbDispatchContext = React.createContext(BREADCRUMB_INITIAL_DISPATCH);
function BreadcrumbProvider({ children }) {
    const [state, dispatch] = React.useReducer(BreadcrumbReducer, BREADCRUMB_INITIAL_STATE);
    return (jsxRuntime.jsx(BreadcrumbStateContext.Provider, Object.assign({ value: state }, { children: jsxRuntime.jsx(BreadcrumbDispatchContext.Provider, Object.assign({ value: dispatch }, { children: children }), void 0) }), void 0));
}
function useBreadcrumb() {
    const state = React__default["default"].useContext(BreadcrumbStateContext);
    if (state === undefined) {
        throw new Error('useBreadcrumbState deve ser utilizando dentro de um BreadcrumbProvider');
    }
    const dispatch = React__default["default"].useContext(BreadcrumbDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useBreadcrumbDispatch deve ser utilizando dentro de um BreadcrumbProvider');
    }
    const actions = BreadcrumbActions;
    function setDictionary(...arrayDictonary) {
        const dictionary = arrayDictonary
            .filter((d) => d[0])
            .map((d) => ({
            key: d[0],
            value: d[1],
        }));
        dispatch({ type: actions.SET_VALUES, payload: dictionary });
    }
    function resetValues() {
        dispatch({ type: actions.RESET_VALUES });
    }
    return { state, setDictionary, resetValues };
}

const BreadcrumbContainer = styled__default["default"].div `
  & svg {
    vertical-align: middle;
    margin: 0px 2px 2px 2px;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const BreadcrumbNavLink = styled__default["default"](reactRouterDom.NavLink) `
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.breadcrumb.color};
  text-decoration: none;

  transition: color ease-in-out 250ms;

  &:hover {
    color: ${({ theme }) => theme.breadcrumb.hover};
  }
`;

function generateBreadcrumbComposition(pathname, originalDictionary) {
    const dictionary = originalDictionary.map((d) => (Object.assign(Object.assign({}, d), { taken: false })));
    const breadcrumb = pathname
        .split('/')
        .filter((x) => x)
        .map((s, index) => {
        let name = s;
        while (name.indexOf('-') > 0) {
            name = name.replace('-', ' ');
        }
        name = name
            .replace(/([A-Z])/g, ' $1')
            .split(' ')
            .map((t) => t.replace(/^./, (str) => {
            return str.toUpperCase();
        }))
            .join(' ');
        const link = pathname
            .split('/')
            .filter((_, i) => i <= index + 1)
            .join('/');
        const dictionaryOccurrences = dictionary.filter((d) => !d.taken && (d.key.toLowerCase() === s.toLowerCase() || d.key.toLowerCase() === (name === null || name === void 0 ? void 0 : name.toLowerCase())));
        if (dictionaryOccurrences.length > 0) {
            dictionaryOccurrences[0].taken = true;
            name = dictionaryOccurrences[0].value;
        }
        return {
            route: s,
            name,
            link,
        };
    });
    if (breadcrumb.length === 0) {
        let name = 'Home';
        const dictionaryOccurrences = dictionary.filter((d) => !d.taken && (d.key.toLowerCase() === 'home' || d.key.toLowerCase() === '/'));
        if (dictionaryOccurrences.length > 0) {
            dictionaryOccurrences[0].taken = true;
            name = dictionaryOccurrences[0].value;
        }
        breadcrumb.push({
            route: '/',
            name,
            link: '/',
        });
    }
    return breadcrumb;
}
let currentLocationPathname = '';
const OptBreadcrumb = () => {
    const location = reactRouterDom.useLocation();
    const { currentTheme } = useOptTheme();
    const { state: { dictionary }, resetValues, } = useBreadcrumb();
    const breadcrumb = generateBreadcrumbComposition(location.pathname, dictionary);
    React.useEffect(() => {
        // fiz sem estado pra não gerar re-render
        currentLocationPathname = location.pathname;
        return () => {
            if (location.pathname !== currentLocationPathname) {
                resetValues();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (jsxRuntime.jsx(BreadcrumbContainer, { children: breadcrumb.map((section, index) => {
            if (section.name) {
                return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [jsxRuntime.jsx(BreadcrumbNavLink, Object.assign({ to: section.link }, { children: jsxRuntime.jsx("span", { children: section.name }, void 0) }), void 0), index >= 0 && index < breadcrumb.length - 1 && (jsxRuntime.jsx("span", { children: jsxRuntime.jsx(Icon__default["default"], { size: 0.6, path: js.mdiChevronRight, color: currentTheme.breadcrumb.separator }, void 0) }, void 0))] }, index));
            }
            return jsxRuntime.jsx(React__default["default"].Fragment, {}, index);
        }) }, void 0));
};

const CustomAvatar = styled__default["default"](material.Avatar) `
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  ${(props) => props.alternativecolor
    ? `background-color: ${props.alternativecolor} !important`
    : `background-color: ${props.theme.appBar.avatar.background} !important`};
  ${(props) => props.color ? `color: ${props.color} !important` : `color: ${props.theme.appBar.avatar.color} !important`};
  font-size: ${(props) => props.size / 2}px;

  &:hover {
    opacity: 0.8;
  }
`;

const OptAvatar = ({ profile, size = 32 }) => {
    let initials = '-';
    const trimmedName = profile.name.trim();
    if (trimmedName.length > 0) {
        const splittedName = trimmedName.split(' ');
        // eslint-disable-next-line prefer-destructuring
        initials = splittedName[0][0];
        if (splittedName.length > 1) {
            initials += splittedName[splittedName.length - 1][0];
        }
    }
    return (jsxRuntime.jsx(CustomAvatar, Object.assign({ alt: profile.name, src: profile.avatarSrc, alternativecolor: profile.alternativeColor, size: size }, { children: !profile.avatarSrc && initials.toUpperCase() }), void 0));
};

const appBarHeight = 48;
const CustomAppBar = styled__default["default"](material.AppBar) `
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  ${({ theme }) => {
    var _a;
    return !!theme.appBar.noBoxShadow
        ? 'box-shadow: none'
        : `box-shadow: 0px -10px 10px 12px ${(_a = theme.appBar.boxShadowColor) !== null && _a !== void 0 ? _a : theme.appBar.background}`;
}};

  .MuiToolbar-regular {
    height: ${appBarHeight}px;
    min-height: ${appBarHeight}px;
  }

  & svg {
    color: ${({ theme }) => theme.appBar.color};
  }

  @media (min-width: 600px) {
    .MuiToolbar-gutters {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
const AppBarDrawerButtonContainer = styled__default["default"].div `
  width: ${sidebarMenuWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: auto;
    align-items: flex-start;
  }
`;
const AppBarEndContainer = styled__default["default"].div `
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > :last-child {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    flex: 1;
  }
`;
const AppBarDrawerButton = styled__default["default"](material.IconButton) `
  padding: 10px;
  margin-left: 0;

  svg {
    color: ${({ theme }) => theme.appBar.menuButton.color};
  }

  &:hover {
    background-color: ${({ theme }) => theme.appBar.menuButton.hover.background};

    svg {
      color: ${({ theme }) => theme.appBar.menuButton.hover.color};
    }
  }
`;
const AvatarPopOver = styled__default["default"](material.Popover) `
  & > .MuiPaper-rounded {
    min-width: 200px;
    display: block;
    border-radius: 8px;
  }

  & .MuiPaper-elevation8 {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  }

  & ul {
    width: 100%;
  }
`;
const MenuAvatarContainer = styled__default["default"].div `
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserNameContainer = styled__default["default"].div `
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
`;
const UserEmailContainer = styled__default["default"].div `
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
`;
const CustomMenuList = styled__default["default"](material.MenuList) `
  & li {
    border-top: 1px solid ${({ theme }) => theme.divider};
    height: 52px;
  }

  & svg {
    margin-right: 8px;
  }
`;
const AppBarContainer = styled__default["default"].div `
  ${(props) => props.marginLeft && 'margin-left: 32px;'}
  display: flex;
  flex: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

const OptAppBarAvatarPopOver = ({ profile, onManageProfile, onLogout, anchorEl, fromSidebar = false, open = false, onBackdropClick, }) => {
    const { currentTheme } = useOptTheme();
    const id = open ? "avatar" : undefined;
    return (jsxRuntime.jsxs(AvatarPopOver, Object.assign({ onBackdropClick: onBackdropClick, anchorEl: anchorEl, id: id, open: open, anchorOrigin: {
            vertical: fromSidebar ? "top" : "bottom",
            horizontal: fromSidebar ? "right" : "center",
        }, transformOrigin: {
            vertical: fromSidebar ? "center" : "top",
            horizontal: fromSidebar ? "left" : "center",
        } }, { children: [jsxRuntime.jsx(MenuAvatarContainer, { children: jsxRuntime.jsx(OptAvatar, { size: 60, profile: profile }, void 0) }, void 0), jsxRuntime.jsx(UserNameContainer, { children: profile.name }, void 0), jsxRuntime.jsx(UserEmailContainer, { children: profile.email }, void 0), jsxRuntime.jsxs(CustomMenuList, { children: [jsxRuntime.jsxs(material.MenuItem, Object.assign({ onClick: onManageProfile }, { children: [jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiAccountCog, color: currentTheme.appBar.avatar.background }, void 0), "Configurar perfil"] }), void 0), jsxRuntime.jsxs(material.MenuItem, Object.assign({ style: { color: ColorPalette.ketchup }, onClick: onLogout }, { children: [jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiExitToApp }, void 0), "Logout"] }), void 0)] }, void 0)] }), void 0));
};

const OptAppBarAvatar = ({ profile, onManageProfile, onLogout, fromSidebar = false, size }) => {
    const [anchorEl, setAnchorEl] = React__default["default"].useState(null);
    const open = Boolean(anchorEl);
    const toggleOpen = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    if (profile) {
        // todo: para um cenário mais customizado, talvez seja interessante subir o elemento do handleClick e montar o objeto de menu fora da Opt
        return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: toggleOpen, size: 'large' }, { children: jsxRuntime.jsx(OptAvatar, { profile: profile, size: size }, void 0) }), void 0), jsxRuntime.jsx(OptAppBarAvatarPopOver, { anchorEl: anchorEl, onLogout: onLogout, onManageProfile: onManageProfile, profile: profile, fromSidebar: fromSidebar, open: open, onBackdropClick: toggleOpen }, void 0)] }, void 0));
    }
    return jsxRuntime.jsx("span", { children: "N\u00E3o autenticado" }, void 0);
};

const useStyles$3 = makeStyles__default["default"]((theme) => createStyles__default["default"]({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));
const OptAppBar = ({ profile, onManageProfile, onLogout, onDrawerOpen, hideDrawerButton, hideBreadcrumb, content, actions, }) => {
    const classes = useStyles$3();
    return (jsxRuntime.jsx(CustomAppBar, Object.assign({ position: "fixed", className: classes.appBar }, { children: jsxRuntime.jsxs(material.Toolbar, { children: [!hideDrawerButton && (jsxRuntime.jsx(AppBarDrawerButtonContainer, { children: jsxRuntime.jsx(AppBarDrawerButton, Object.assign({ "aria-label": "open drawer", onClick: onDrawerOpen, edge: "start" }, { children: jsxRuntime.jsx(Icon__default["default"], { size: 1, path: js.mdiMenu }, void 0) }), void 0) }, void 0)), jsxRuntime.jsxs(AppBarContainer, Object.assign({ marginLeft: hideDrawerButton }, { children: [!hideBreadcrumb && jsxRuntime.jsx(OptBreadcrumb, {}, void 0), content] }), void 0), jsxRuntime.jsxs(AppBarEndContainer, { children: [actions, jsxRuntime.jsx(OptAppBarAvatar, { profile: profile, onManageProfile: onManageProfile, onLogout: onLogout }, void 0)] }, void 0)] }, void 0) }), void 0));
};

const OptLoading = ({ size = 100, color = 'primary' }) => {
    return (jsxRuntime.jsx("div", Object.assign({ style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: size,
            flex: 1,
        } }, { children: jsxRuntime.jsx(material.CircularProgress, { size: size, color: color }, void 0) }), void 0));
};

const useStyles$2 = makeStyles__default["default"]((theme) => createStyles__default["default"]({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const OptBackdrop = ({ open }) => {
    const classes = useStyles$2();
    return (jsxRuntime.jsx(material.Backdrop, Object.assign({ className: classes.backdrop, open: open }, { children: jsxRuntime.jsx(OptLoading, { color: "secondary", size: 60 }, void 0) }), void 0));
};

const OptChip = styled__default["default"](material.Chip) `
  font-weight: 600;
  ${({ backgroundcolor }) => (backgroundcolor ? `background-color: ${backgroundcolor};` : '')}
  ${({ textcolor }) => (textcolor ? `color: ${textcolor};` : '')}
`;

const StyledDialog = styled__default["default"](material.Dialog) `
  text-align: center;

  .MuiDialog-paper {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
  }
`;
const OptDialogActions = styled__default["default"](material.DialogActions) `
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.divider};
  margin-top: 16px;

  &.MuiDialogActions-root {
    padding: 0;
  }

  & .MuiButton-text {
    flex: 1;
    border-radius: 0;
    margin: 0;
    padding: 20px 8px;
    min-width: 140px;

    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.divider};
    }
  }
`;
const DialogIconContainer = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;

  & svg {
    border-radius: 50%;
    background-color: ${({ color }) => color + '10'};
    padding: 16px;
  }
`;

function PaperComponent(props) {
    return (jsxRuntime.jsx(Draggable__default["default"], Object.assign({ handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' }, { children: jsxRuntime.jsx(material.Paper, Object.assign({}, props), void 0) }), void 0));
}
const OptConfirmationDialog = ({ open, title, cancelButtonText, confirmationButtonText, icon, onClose, onCancel, onConfirm, children, }) => {
    var _a, _b;
    return (jsxRuntime.jsxs(StyledDialog, Object.assign({ open: open, onClose: onClose, "aria-labelledby": "draggable-dialog-title", PaperComponent: PaperComponent }, { children: [jsxRuntime.jsxs("div", Object.assign({ style: { cursor: 'move' }, id: "draggable-dialog-title" }, { children: [icon && (jsxRuntime.jsx(DialogIconContainer, Object.assign({ color: (_a = icon.color) !== null && _a !== void 0 ? _a : '#000000' }, { children: jsxRuntime.jsx(Icon__default["default"], { path: icon.path, size: 3.2, color: (_b = icon.color) !== null && _b !== void 0 ? _b : '#000000' }, void 0) }), void 0)), jsxRuntime.jsx(material.DialogTitle, { children: title }, void 0)] }), void 0), jsxRuntime.jsx(material.DialogContent, { children: jsxRuntime.jsx(material.DialogContentText, { children: children }, void 0) }, void 0), jsxRuntime.jsxs(OptDialogActions, { children: [jsxRuntime.jsx(material.Button, Object.assign({ autoFocus: true, onClick: onCancel }, { children: cancelButtonText !== null && cancelButtonText !== void 0 ? cancelButtonText : 'Cancelar' }), void 0), jsxRuntime.jsx(material.Button, Object.assign({ onClick: onConfirm }, { children: confirmationButtonText !== null && confirmationButtonText !== void 0 ? confirmationButtonText : 'Confirmar' }), void 0)] }, void 0)] }), void 0));
};

const OptDialog = ({ open, title, icon, onClose, children, }) => {
    var _a, _b;
    return (jsxRuntime.jsxs(StyledDialog, Object.assign({ open: open, onClose: onClose }, { children: [jsxRuntime.jsxs("div", Object.assign({ style: { cursor: "move" }, id: "draggable-dialog-title" }, { children: [icon && (jsxRuntime.jsx(DialogIconContainer, Object.assign({ color: (_a = icon.color) !== null && _a !== void 0 ? _a : "#000000" }, { children: jsxRuntime.jsx(Icon__default["default"], { path: icon.path, size: 3.2, color: (_b = icon.color) !== null && _b !== void 0 ? _b : "#000000" }, void 0) }), void 0)), jsxRuntime.jsx(material.DialogTitle, { children: title }, void 0)] }), void 0), children] }), void 0));
};

const OptDivider = styled__default["default"](material.Divider) `
  background-color: ${({ color, theme }) => color !== null && color !== void 0 ? color : theme.drawer.divider};
  ${({ marginy }) => `margin: ${marginy}px 0;`}
`;

const OptDrawerMenu = ({ sections, onHideDrawer, onToggleDockDrawer, docked, drawerLogo, version, }) => {
    const { currentTheme } = useOptTheme();
    drawerLogo = drawerLogo !== null && drawerLogo !== void 0 ? drawerLogo : jsxRuntime.jsx("div", {}, void 0);
    return (jsxRuntime.jsxs(DrawerMenuContainer, { children: [!docked && (jsxRuntime.jsx(CloseDrawerContainer, { children: jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: onHideDrawer, size: "large" }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1.8, path: js.mdiMenuOpen, color: currentTheme.drawer.close.color }, void 0) }), void 0) }, void 0)), sections.map((section, index) => (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [index > 0 && jsxRuntime.jsx(OptDivider, {}, void 0), jsxRuntime.jsx(material.List, { children: section.items.map((item, index) => (jsxRuntime.jsx(DrawerNavLink, Object.assign({ to: item.path, activeClassName: activeLinkClass, exact: item.activeShouldBeExact }, { children: jsxRuntime.jsxs(MenuListItem, Object.assign({ button: true }, { children: [jsxRuntime.jsx(material.ListItemIcon, { children: item.icon }, void 0), jsxRuntime.jsx(material.ListItemText, { primary: item.title }, void 0)] }), void 0) }), index))) }, void 0)] }, index))), jsxRuntime.jsxs(Footer, { children: [jsxRuntime.jsxs(FooterHeader, { children: [drawerLogo, jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: onToggleDockDrawer, size: "large" }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: docked ? js.mdiPinOff : js.mdiPin, color: currentTheme.drawer.close.color }, void 0) }), void 0)] }, void 0), jsxRuntime.jsx(Version, { children: version }, void 0)] }, void 0)] }, void 0));
};

const OptGridActionsHeader = () => {
    return jsxRuntime.jsx("th", { style: { width: '1%' } }, void 0);
};

const GridContainer = styled__default["default"].div `
  border: 1px solid ${({ theme }) => theme.divider};
  border-radius: 16px;

  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }
`;
const PaginationContainer = styled__default["default"].div `
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding: 12px 24px;
  display: flex;
  justify-content: end;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;
const Title = styled__default["default"].div `
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.0075em;
  padding: 12px 24px;
`;
const StyledTable = styled__default["default"].table `
  border-spacing: 0;
  width: 100%;

  tbody tr:hover {
    background-color: ${({ theme }) => color__default["default"](theme.divider).lighten(0.03).hex()};
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    border-right: 1px solid ${({ theme }) => theme.divider};

    /* But "collapsed" cells should be as small as possible */
    &.collapse {
      width: 0.0000000001%;
    }

    :last-child {
      border-right: 0;
    }
  }
`;
const StyledTh = styled__default["default"].th `
  ${({ customWidth: width }) => {
    if (!!width) {
        return `width: ${width}px`;
    }
    return '';
}}
`;

const OptGridHeaders = ({ headerGroups, columns, actionsPosition }) => {
    function getOptColumn(id) {
        return columns.find((x) => x.field === id);
    }
    return (jsxRuntime.jsx("thead", { children: headerGroups.map((headerGroup) => (jsxRuntime.jsxs("tr", Object.assign({}, headerGroup.getHeaderGroupProps(), { children: [actionsPosition === 'start' && jsxRuntime.jsx(OptGridActionsHeader, {}, void 0), headerGroup.headers.map((column) => {
                    const currentOptColumn = getOptColumn(column.id);
                    return (jsxRuntime.jsxs(StyledTh, Object.assign({}, column.getHeaderProps(), { customWidth: currentOptColumn === null || currentOptColumn === void 0 ? void 0 : currentOptColumn.width }, { children: [column.render('Header'), jsxRuntime.jsx("span", { children: column.isSorted && (column.isSortedDesc ? ' 🔽' : ' 🔼') }, void 0)] }), void 0));
                }), actionsPosition === 'end' && jsxRuntime.jsx(OptGridActionsHeader, {}, void 0)] }), void 0))) }, void 0));
};

const OptGridPagination = ({ canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, pageIndex, pageSize, }) => {
    const { currentTheme } = useOptTheme();
    return (jsxRuntime.jsxs(PaginationContainer, Object.assign({ className: "pagination" }, { children: [jsxRuntime.jsx(material.Select, Object.assign({ value: pageSize, onChange: (e) => {
                    setPageSize(Number(e.target.value));
                }, size: "small" }, { children: [5, 10, 25, 50, 100].map((pageSize) => (jsxRuntime.jsxs(material.MenuItem, Object.assign({ value: pageSize }, { children: [pageSize, " linhas"] }), pageSize))) }), void 0), jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: () => gotoPage(0), disabled: !canPreviousPage, size: "small" }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiPageFirst, color: currentTheme.divider }, void 0) }), void 0), jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: () => previousPage(), disabled: !canPreviousPage }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiChevronLeft, color: currentTheme.divider }, void 0) }), void 0), jsxRuntime.jsxs("span", { children: ["P\u00E1gina", " ", jsxRuntime.jsxs("strong", { children: [pageIndex + 1, " de ", pageOptions.length] }, void 0), " "] }, void 0), jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: () => nextPage(), disabled: !canNextPage }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiChevronRight, color: currentTheme.divider }, void 0) }), void 0), jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: () => gotoPage(pageCount - 1), disabled: !canNextPage }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: js.mdiPageLast, color: currentTheme.divider }, void 0) }), void 0)] }), void 0));
};

const OptGridActionsCell = ({ actions, data, }) => {
    const { currentTheme } = useOptTheme();
    return (jsxRuntime.jsx("td", Object.assign({ className: 'td-opt', style: { display: 'flex' } }, { children: actions === null || actions === void 0 ? void 0 : actions.map((action, index) => {
            var _a;
            const isFunction = typeof action === 'function';
            let currentAction = action;
            if (isFunction) {
                currentAction = action(data);
            }
            const color = (_a = currentAction.icon.color) !== null && _a !== void 0 ? _a : currentTheme.color;
            let iconButton = (jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: (e) => {
                    e.stopPropagation();
                    currentAction.onClick(e, data);
                } }, { children: jsxRuntime.jsx(Icon.Icon, { size: 1, path: currentAction.icon.path, color: color }, void 0) }), index));
            if (currentAction.tooltip) {
                iconButton = (jsxRuntime.jsx(material.Tooltip, Object.assign({ title: currentAction.tooltip }, { children: iconButton }), void 0));
            }
            return iconButton;
        }) }), void 0));
};

const OptGridRows = ({ page, prepareRow, onRowClick, actions, actionsPosition, columns }) => {
    function getOptColumn(id) {
        return columns.find((x) => x.field === id);
    }
    return (jsxRuntime.jsx(React__default["default"].Fragment, { children: page.map((row, _) => {
            prepareRow(row);
            return (jsxRuntime.jsxs("tr", Object.assign({ onClick: (_) => {
                    onRowClick(row.values);
                } }, row.getRowProps({}), { children: [actionsPosition === 'start' && (jsxRuntime.jsx(OptGridActionsCell, { actions: actions, data: row.values }, void 0)), row.cells.map((cell) => {
                        var _a;
                        const currentOptColumn = getOptColumn(cell.column.id);
                        let content = cell.render('Cell');
                        const hasCustomRender = currentOptColumn && currentOptColumn.render;
                        if (hasCustomRender) {
                            const data = row.values;
                            content = currentOptColumn.render(data);
                        }
                        return (jsxRuntime.jsx("td", Object.assign({}, cell.getCellProps(), { style: { textAlign: (_a = currentOptColumn === null || currentOptColumn === void 0 ? void 0 : currentOptColumn.align) !== null && _a !== void 0 ? _a : 'start' } }, { children: content }), void 0));
                    }), actionsPosition === 'end' && (jsxRuntime.jsx(OptGridActionsCell, { actions: actions, data: row.values }, void 0))] }), void 0));
        }) }, void 0));
};

const OptGridInternal = ({ columns, data, options, onRowClick, title, actions, actionsPosition }, ref) => {
    var _a;
    const isRemote = !Array.isArray(data);
    const [controls, setControls] = React.useState({
        totalCount: isRemote ? 0 : data.length,
        pageCount: isRemote ? 0 : Math.ceil(data.length / 10),
        loading: false,
        data: isRemote ? [] : data
    });
    const internalColumns = React__default["default"].useMemo(() => columns.map((x) => {
        const transformedColumn = {
            Header: x.title,
            accessor: x.field,
            minWidth: x.width,
            width: x.width,
            maxWidth: x.width
        };
        return transformedColumn;
    }), [columns]);
    const table = reactTable.useTable({
        columns: internalColumns,
        data: controls.data,
        initialState: { pageIndex: 0, pageSize: (_a = options === null || options === void 0 ? void 0 : options.pageSize) !== null && _a !== void 0 ? _a : 10 },
        manualPagination: true,
        // hook that we'll handle our own data fetching
        // This means we'll also have to provide our own
        // pageCount.
        pageCount: controls.pageCount
    }, reactTable.usePagination);
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, 
    // Get the state from the instance
    state: { pageIndex, pageSize } } = table;
    function loadRemote(data) {
        const query = {
            orderBy: '',
            orderDirection: 'asc',
            page: pageIndex,
            pageSize: pageSize !== null && pageSize !== void 0 ? pageSize : 10,
            search: ''
        };
        setControls(Object.assign(Object.assign({}, controls), { data: [], loading: true }));
        data(query).then((result) => {
            setControls(Object.assign(Object.assign({}, controls), { data: result.data, totalCount: result.totalCount, pageCount: Math.ceil(result.totalCount / pageSize), loading: false }));
        });
    }
    function loadLocal(data) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        const slicedData = data.slice(startRow, endRow);
        setControls(Object.assign(Object.assign({}, controls), { data: slicedData, totalCount: data.length, pageCount: Math.ceil(data.length / pageSize), loading: false }));
    }
    function load() {
        if (isRemote) {
            loadRemote(data);
        }
        else {
            // todo
            loadLocal(data);
        }
    }
    React.useImperativeHandle(ref, () => ({
        refresh: () => {
            load();
        }
    }));
    React__default["default"].useEffect(() => {
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controls.pageCount, controls.totalCount, pageIndex, pageSize]);
    return (jsxRuntime.jsxs(GridContainer, Object.assign({ className: 'opt-grid' }, { children: [jsxRuntime.jsx(Title, { children: title }, void 0), jsxRuntime.jsx("div", Object.assign({ className: 'tableWrap' }, { children: jsxRuntime.jsxs(StyledTable, Object.assign({}, getTableProps(), { children: [jsxRuntime.jsx(OptGridHeaders, { headerGroups: headerGroups, columns: columns, actionsPosition: actionsPosition }, void 0), jsxRuntime.jsxs("tbody", Object.assign({}, getTableBodyProps(), { children: [jsxRuntime.jsx(OptGridRows, { columns: columns, onRowClick: onRowClick, page: page, prepareRow: prepareRow, actions: actions, actionsPosition: actionsPosition }, void 0), jsxRuntime.jsx("tr", { children: controls.loading && jsxRuntime.jsx("td", Object.assign({ colSpan: 10000 }, { children: "Carregando..." }), void 0) }, void 0)] }), void 0)] }), void 0) }), void 0), jsxRuntime.jsx(OptGridPagination, { canPreviousPage: canPreviousPage, canNextPage: canNextPage, pageOptions: pageOptions, pageCount: pageCount, gotoPage: gotoPage, nextPage: nextPage, previousPage: previousPage, setPageSize: setPageSize, pageIndex: pageIndex, pageSize: pageSize }, void 0)] }), void 0));
};
const OptGrid = React__default["default"].forwardRef(OptGridInternal);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const AdvancedSearchContainer = styled__default["default"].div `
  display: flex;
  margin-bottom: 12px;
  width: ${({ width }) => { var _a; return (_a = width + 'px') !== null && _a !== void 0 ? _a : '100%'; }};
  ${({ paddingx }) => styled.css `
      padding: 0 ${paddingx}px;
    `};

  & > input {
    flex: 1;
    padding: 12px;
    line-height: 38px;
    font-size: 14px;
    border: none;
    border: ${({ $noborder }) => ($noborder ? 'unset' : `1px solid ${ColorPalette.gray6}`)};
    border-right: unset;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 48px;

    &:focus {
      -webkit-box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      -moz-box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      box-shadow: inset 0px -1px 1px 0px ${({ theme }) => theme.primary};
      outline: 0 none;
    }
  }

  & button {
    border: none;
    background-color: ${({ theme }) => theme.primary};
    color: ${ColorPalette.white};
    padding: 12px;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 48px;

    &:focus {
      outline: 0 none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
AdvancedSearchContainer.defaultProps = {
    $noborder: false,
};

const OptSearchField = ({ placeholder = 'Pesquisar', onSearch, noBorder, width, paddingX }) => {
    const ref = React.createRef();
    function onClickSearchButton() {
        var _a, _b;
        onSearch(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value) ? (_b = ref.current) === null || _b === void 0 ? void 0 : _b.value : undefined);
    }
    function verificarTeclaPressionadaEnter(event) {
        var _a, _b;
        if (event.key === 'Enter') {
            onSearch(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value) ? (_b = ref.current) === null || _b === void 0 ? void 0 : _b.value : undefined);
        }
    }
    return (jsxRuntime.jsxs(AdvancedSearchContainer, Object.assign({ "$noborder": noBorder, width: width, paddingx: paddingX }, { children: [jsxRuntime.jsx("input", { type: "text", placeholder: placeholder, ref: ref, onKeyDown: verificarTeclaPressionadaEnter }, void 0), jsxRuntime.jsx(material.ButtonBase, Object.assign({ onClick: onClickSearchButton }, { children: jsxRuntime.jsx(Icon__default["default"], { size: 0.8, path: js.mdiMagnify, color: ColorPalette.white }, void 0) }), void 0)] }), void 0));
};

styled__default["default"].div `
  background-color: ${ColorPalette.gray6};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 65%;
  align-items: stretch;

  @media (max-width: 745px) {
    width: 95%;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-height: 475px) {
    padding: 10px;
  }
`;
styled__default["default"].div `
  margin-top: 30px;
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
styled__default["default"].div `
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: rgb(130, 130, 130);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ScrollContainer = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
const MensagemFooter = styled__default["default"].p `
  text-align: center;
  font-size: 16px;
  padding: 10px 0 20px 0;
`;

const distanciaEmPixel = 100;
const OptInfiniteScrollList = ({ carregar, renderItem, pageSize = 10, semPesquisa = false, onError, }) => {
    const [state, setState] = React.useState({
        carregando: false,
        total: 0,
        pagina: 0,
        lista: [],
        listaRender: [],
        termoPesquisa: "",
    });
    const [primeiroCarregamento, setPrimeiroCarregamento] = React.useState(true);
    const { carregando, total, pagina, lista, listaRender, termoPesquisa } = state;
    const componenteRef = React.useRef(null);
    const scrollRef = React.useRef(null);
    const possuiItens = lista.length > 0;
    const todosRegistrosCarregados = possuiItens && lista.length === total;
    const naoPossuiRegistrosNaPagina = total === 0 && lista.length === total;
    function recarregarLista() {
        return __awaiter(this, void 0, void 0, function* () {
            setState(Object.assign(Object.assign({}, state), { carregando: true }));
            try {
                const response = yield carregar(termoPesquisa, pagina, pageSize);
                adicionarNovosItens(response, true);
            }
            catch (err) {
                setState(Object.assign(Object.assign({}, state), { carregando: false }));
                onError && onError("Falha ao carregar registros!");
            }
        });
    }
    function carregarPagina(search, page) {
        return __awaiter(this, void 0, void 0, function* () {
            if (carregando)
                return;
            if (todosRegistrosCarregados)
                return;
            if (naoPossuiRegistrosNaPagina) {
                setState((currentState) => (Object.assign(Object.assign({}, currentState), { carregando: true })));
            }
            try {
                const response = yield carregar(search, page, pageSize);
                adicionarNovosItens(response);
            }
            catch (err) {
                setState((currentState) => (Object.assign(Object.assign({}, currentState), { carregando: false })));
                throw new Error("Falha ao carregar registros");
            }
        });
    }
    const scrollObserver = React.useCallback((node) => {
        const options = {
            rootMargin: `${distanciaEmPixel}px`,
        };
        const listener = (entries) => {
            if (entries) {
                entries.forEach((en) => {
                    if (en.intersectionRatio > 0) {
                        carregarPagina(termoPesquisa, pagina + 1);
                    }
                });
            }
        };
        const observer = new IntersectionObserver(listener, options);
        observer.observe(node);
        return () => observer.disconnect();
        //eslint-disable-next-line
    }, []);
    function adicionarNovosItens(response, reset = false) {
        setState((currentState) => (Object.assign(Object.assign({}, currentState), { total: response.total, pagina: response.page, lista: reset
                ? [...response.data]
                : [...currentState.lista, ...response.data], carregando: false })));
        if (primeiroCarregamento) {
            setPrimeiroCarregamento(false);
        }
    }
    function pesquisarPorTermo(termo) {
        if (termo) {
            setState((currentState) => (Object.assign(Object.assign({}, currentState), { termoPesquisa: termo })));
        }
    }
    function gerarListaRenderizacao() {
        let novaListaRender = [];
        lista.forEach((item, index) => {
            novaListaRender.push(renderItem(item, index));
        });
        setState((currentState) => (Object.assign(Object.assign({}, currentState), { listaRender: novaListaRender })));
    }
    React.useEffect(() => {
        gerarListaRenderizacao();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lista]);
    React.useEffect(() => {
        const componenteScrolado = scrollRef.current;
        const componenteCarregado = componenteRef.current;
        const scrollInvalido = !componenteCarregado || !componenteScrolado || primeiroCarregamento;
        if (scrollInvalido)
            return;
        scrollObserver(componenteScrolado);
    }, [
        scrollObserver,
        primeiroCarregamento,
        possuiItens,
        todosRegistrosCarregados,
        naoPossuiRegistrosNaPagina,
    ]);
    React.useEffect(() => {
        recarregarLista();
        //eslint-disable-next-line
    }, [termoPesquisa]);
    return (jsxRuntime.jsxs("div", Object.assign({ ref: componenteRef }, { children: [!semPesquisa && jsxRuntime.jsx(OptSearchField, { onSearch: pesquisarPorTermo }, void 0), possuiItens && listaRender, todosRegistrosCarregados && (jsxRuntime.jsx(MensagemFooter, { children: "Todos registros foram carregados" }, void 0)), naoPossuiRegistrosNaPagina && (jsxRuntime.jsx(MensagemFooter, { children: "Nenhum registro encontrado" }, void 0)), !naoPossuiRegistrosNaPagina && !todosRegistrosCarregados && (jsxRuntime.jsx(ScrollContainer, { children: jsxRuntime.jsx(material.CircularProgress, { ref: scrollRef, size: 20 }, void 0) }, void 0))] }), void 0));
};

const OptLabel = styled__default["default"](material.InputLabel) `
  margin-bottom: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;

const GlobalStyles = styled.createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // Reseta para fonts padrões dos dispositivos
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
  }

  html, body, #root {
      height: ${({ noAppBar }) => noAppBar ? `100%` : `calc(100% - ${appBarHeight$1}px)`};
  }

  #root {
    display: flex;
     ${({ noAppBar }) => noAppBar &&
    styled.css `
         overflow-y: auto;
       `};

    ${ScrollbarCSS}
  }
`;
styled.createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // Reseta para fonts padrões dos dispositivos
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
  }

  html, body, #root {
      height: ${({ noAppBar }) => noAppBar ? `100%` : `calc(100% - ${appBarHeight$1}px)`};
  }

`;

const OptSidebar = ({ sections, footerActions }) => {
    const { currentTheme } = useOptTheme();
    return (jsxRuntime.jsxs(SidebarContainer, { children: [sections.map((section, index) => (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [index > 0 && jsxRuntime.jsx(SidebarMenuDivider$2, {}, void 0), jsxRuntime.jsx(CustomList$2, { children: section.items.map((item, index) => {
                            var _a;
                            item.iconColor = (_a = item.iconColor) !== null && _a !== void 0 ? _a : currentTheme.sidebar.link.color;
                            item.icon =
                                typeof item.icon === 'string' ? jsxRuntime.jsx(Icon__default["default"], { size: 1, path: item.icon, color: item.iconColor }, void 0) : item.icon;
                            return (jsxRuntime.jsx(SidebarNavLink$1, Object.assign({ to: item.path, activeClassName: activeLinkClass$2, exact: item.activeShouldBeExact }, { children: jsxRuntime.jsxs(SidebarListItem$1, Object.assign({ button: true }, { children: [jsxRuntime.jsx(SidebarListItemIcon$1, { children: item.icon }, void 0), jsxRuntime.jsx(SidebarListItemText$1, { primary: item.title }, void 0)] }), void 0) }), index));
                        }) }, void 0)] }, index))), jsxRuntime.jsx(FooterActionsContainer$1, { children: footerActions }, void 0)] }, void 0));
};

const OptLayout = ({ sections, routes, noSidebar = false, onManageProfile, profile, children, onLogout, drawerLogo, version, appBarConfig, }) => {
    const [dockedDrawer, setDockedDrawer] = React.useState(!!localStorage.getItem(LocalStorageKeys.DockedDrawer));
    const hasSidebar = !noSidebar && !dockedDrawer;
    if (routes && routes.type !== reactRouterDom.Switch) {
        console.error('Prop routes is not a Switch!');
    }
    const [drawerOpen, setDrawerOpen] = React__default["default"].useState(false);
    function handleDrawerOpen() {
        setDrawerOpen(true);
    }
    function handleDrawerClose() {
        setDrawerOpen(false);
    }
    function toggleDockedDrawer() {
        if (!dockedDrawer) {
            localStorage.setItem(LocalStorageKeys.DockedDrawer, 'true');
            setDrawerOpen(false);
        }
        else {
            localStorage.removeItem(LocalStorageKeys.DockedDrawer);
            setDrawerOpen(true);
        }
        setDockedDrawer(!dockedDrawer);
    }
    return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [jsxRuntime.jsx(GlobalStyles, {}, void 0), jsxRuntime.jsx(OptAppBar, { profile: profile, onManageProfile: onManageProfile, onLogout: onLogout, onDrawerOpen: handleDrawerOpen, hideDrawerButton: dockedDrawer, hideBreadcrumb: appBarConfig === null || appBarConfig === void 0 ? void 0 : appBarConfig.hideBreadcrumb, content: appBarConfig === null || appBarConfig === void 0 ? void 0 : appBarConfig.content, actions: appBarConfig === null || appBarConfig === void 0 ? void 0 : appBarConfig.actions }, void 0), jsxRuntime.jsxs(Container, { children: [hasSidebar && jsxRuntime.jsx(OptSidebar, { sections: sections }, void 0), dockedDrawer && (jsxRuntime.jsx(DockedDrawerContainer, { children: jsxRuntime.jsx(OptDrawerMenu, { sections: sections, onToggleDockDrawer: toggleDockedDrawer, docked: true, drawerLogo: drawerLogo, version: version }, void 0) }, void 0)), children, routes && (jsxRuntime.jsx(React.Suspense, Object.assign({ fallback: jsxRuntime.jsxs("div", Object.assign({ style: { flex: 1, marginTop: 1 } }, { children: [jsxRuntime.jsx(material.LinearProgress, { color: 'secondary' }, void 0), jsxRuntime.jsx(material.LinearProgress, { color: 'primary' }, void 0)] }), void 0) }, { children: jsxRuntime.jsx(ContentContainer, { children: routes }, void 0) }), void 0))] }, void 0), jsxRuntime.jsx(material.SwipeableDrawer, Object.assign({ anchor: 'left', open: drawerOpen, onClose: handleDrawerClose, onOpen: handleDrawerOpen }, { children: jsxRuntime.jsx(OptDrawerMenu, { sections: sections, onHideDrawer: handleDrawerClose, onToggleDockDrawer: toggleDockedDrawer, drawerLogo: drawerLogo, version: version }, void 0) }), void 0)] }, void 0));
};

const RobotoFontStyles = styled.createGlobalStyle `
  /* Importar diretamente da URL do Google não funcionou, logo, trouxe o conteúdo do arquivo css para cá */


 /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzQdL_nz.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzwdL_nz.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzMdL_nz.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz8dL_nz.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz4dL_nz.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc3CsTKlA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc-CsTKlA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc2CsTKlA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc5CsTKlA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc1CsTKlA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc0CsTKlA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc3CsTKlA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc-CsTKlA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc2CsTKlA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc5CsTKlA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc1CsTKlA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc0CsTKlA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc3CsTKlA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc-CsTKlA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc2CsTKlA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc5CsTKlA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc1CsTKlA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc0CsTKlA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxFIzIFKw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxMIzIFKw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxEIzIFKw.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxLIzIFKw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxHIzIFKw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxGIzIFKw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxIIzI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfABc4EsA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCBc4EsA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBxc4EsA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCxc4EsA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

function transformTheme(t) {
    return {
        primary: t.primary,
        primaryContrast: t.primaryContrast,
        secondary: t.secondary,
        secondaryContrast: t.secondaryContrast,
        background: ColorPalette.white,
        color: ColorPalette.gray2,
        divider: ColorPalette.gray6,
        scrollbar: {
            background: ColorPalette.white,
            topColor: ColorPalette.gray4,
            bottomColor: ColorPalette.gray5,
            shadowColor: ColorPalette.gray6,
            hover: {
                topCollor: ColorPalette.gray4,
                bottomCollor: ColorPalette.gray4,
            },
        },
        breadcrumb: {
            color: ColorPalette.gray2,
            hover: t.primary,
            separator: ColorPalette.gray2,
        },
        appBar: buildAppBarTheme(t),
        toolbar: {
            color: ColorPalette.gray2,
            background: ColorPalette.white,
        },
        sidebar: {
            background: ColorPalette.white,
            color: ColorPalette.gray3,
            divider: ColorPalette.gray6,
            link: {
                color: ColorPalette.gray3,
                active: {
                    background: t.primary,
                    color: t.primaryContrast,
                },
                hover: {
                    background: t.secondary,
                    color: t.secondaryContrast,
                },
            },
        },
        drawer: {
            docked: {
                borderColor: ColorPalette.gray6,
            },
            close: {
                background: 'inherit',
                color: t.secondary,
            },
            background: ColorPalette.white,
            color: ColorPalette.gray3,
            divider: ColorPalette.gray6,
            versionColor: ColorPalette.gray3,
            link: {
                color: ColorPalette.gray3,
                active: {
                    background: t.primary,
                    color: t.primaryContrast,
                },
                hover: {
                    background: t.secondary,
                    color: t.secondaryContrast,
                },
            },
        },
        inputs: {
            outline: ColorPalette.gray6,
            outlineFocus: t.primary,
            outlineHover: ColorPalette.gray5,
        },
    };
}
function buildAppBarTheme(t) {
    return {
        background: t.style === 'soft' ? ColorPalette.gray6 : t.primary,
        color: t.style === 'soft' ? t.primary : t.primaryContrast,
        boxShadowColor: 'rgba(0, 0, 0, 0.05)',
        noBoxShadow: false,
        side: {
            divider: t.style === 'soft'
                ? ColorPalette.gray5
                : color__default["default"](t.primary).lighten(0.1).hex(),
            borderColor: ColorPalette.gray6,
            link: {
                color: t.style === 'soft' ? t.primary : t.primaryContrast,
                active: {
                    background: t.style === 'soft' ? t.primary : t.primaryContrast,
                    color: t.style === 'soft' ? t.primaryContrast : t.primary,
                },
                hover: {
                    background: color__default["default"](t.primary).lighten(0.25).hex(),
                    color: t.primaryContrast,
                },
            },
        },
        menuButton: {
            color: t.primary,
            hover: {
                background: t.primary,
                color: t.primaryContrast,
            },
        },
        avatar: {
            background: t.secondary,
            color: t.secondaryContrast,
        },
    };
}

const generateMuiTheme = (optTheme, usingDarkTheme = false) => {
    return styles.createTheme({
        palette: {
            mode: usingDarkTheme ? "dark" : "light",
            primary: {
                main: optTheme.primary,
            },
            secondary: {
                main: optTheme.secondary,
            },
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        "&": {
                            padding: 8,
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        "& $notchedOutline": {
                            borderColor: optTheme.inputs.outline,
                        },
                        "&:hover $notchedOutline": {
                            borderColor: optTheme.inputs.outlineHover,
                        },
                        "&$focused $notchedOutline": {
                            borderColor: optTheme.inputs.outlineFocus,
                        },
                    },
                },
            },
        },
    });
};
const OptLayoutProvider = (_a) => {
    var { children, noRouter = false } = _a, props = __rest(_a, ["children", "noRouter"]);
    return (jsxRuntime.jsxs(OptThemeProvider, { children: [!noRouter && (jsxRuntime.jsx(reactRouterDom.BrowserRouter, { children: jsxRuntime.jsx(BreadcrumbProvider, { children: jsxRuntime.jsx(OptThemedLayout, Object.assign({ noRouter: noRouter }, props, { children: children }), void 0) }, void 0) }, void 0)), noRouter && (jsxRuntime.jsx(BreadcrumbProvider, { children: jsxRuntime.jsx(OptThemedLayout, Object.assign({ noRouter: noRouter }, props, { children: children }), void 0) }, void 0))] }, void 0));
};
const OptThemedLayout = (props) => {
    const { theme, darkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme), children, } = props;
    const [themeLoaded, setThemeLoaded] = React.useState(false);
    const { currentTheme, state: { usingDarkTheme }, setCustomTheme, setDarkTheme, } = useOptTheme();
    React.useLayoutEffect(() => {
        if (theme) {
            const newCustomTheme = {};
            if (theme.light) {
                newCustomTheme.light = transformTheme(theme.light);
            }
            else if (theme.dark) {
                newCustomTheme.dark = transformTheme(theme.dark);
            }
            setCustomTheme(newCustomTheme);
        }
        else {
            setCustomTheme({});
        }
        setThemeLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useLayoutEffect(() => {
        setThemeLoaded(false);
        if (theme) {
            const newCustomTheme = {};
            if (theme.light) {
                newCustomTheme.light = transformTheme(theme.light);
            }
            else if (theme.dark) {
                newCustomTheme.dark = transformTheme(theme.dark);
            }
            setCustomTheme(newCustomTheme);
        }
        else {
            setCustomTheme({});
        }
        setThemeLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);
    React.useLayoutEffect(() => {
        if (usingDarkTheme !== darkTheme) {
            setDarkTheme(darkTheme);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [darkTheme]);
    return (jsxRuntime.jsx(styles.ThemeProvider, Object.assign({ theme: generateMuiTheme(currentTheme, usingDarkTheme) }, { children: jsxRuntime.jsxs(styled.ThemeProvider, Object.assign({ theme: currentTheme }, { children: [jsxRuntime.jsx(RobotoFontStyles, {}, void 0), !themeLoaded ? jsxRuntime.jsx(OptLoading, {}, void 0) : jsxRuntime.jsx(jsxRuntime.Fragment, { children: children }, void 0)] }), void 0) }), void 0));
};

const colors = {
    primary: ColorPalette.primary,
    primary75: ColorPalette.primaryTints.tint2,
    primary50: ColorPalette.primaryTints.tint6,
    primary25: ColorPalette.primaryTints.tint8,
    danger: ColorPalette.white,
    dangerLight: ColorPalette.ketchup,
    neutral0: ColorPalette.white,
    neutral5: ColorPalette.gray8,
    neutral10: ColorPalette.gray6,
    neutral20: ColorPalette.gray6,
    neutral30: ColorPalette.gray5,
    neutral40: ColorPalette.gray4,
    neutral50: ColorPalette.gray3,
    neutral60: ColorPalette.gray2,
    neutral70: ColorPalette.gray1,
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)',
};
const borderRadius = 4;
// Used to calculate consistent margin/padding on elements
const baseUnit = 4;
// The minimum height of the control
const controlHeight = 56;
// The amount of space between the control and menu */
const menuGutter = baseUnit * 2;
const spacing = {
    baseUnit,
    controlHeight,
    menuGutter,
};
const optSelectTheme = {
    borderRadius,
    colors,
    spacing,
};

const OptSelect = React__default["default"].forwardRef((_a, ref) => {
    var { isMulti } = _a, props = __rest(_a, ["isMulti"]);
    const { currentTheme } = useOptTheme();
    const { borderRadius, colors, spacing } = optSelectTheme;
    return (jsxRuntime.jsx(Select__default["default"], Object.assign({ backspaceRemovesValue: true, isMulti: isMulti, theme: {
            borderRadius,
            spacing,
            colors: Object.assign(Object.assign({}, colors), { primary: currentTheme.primary, primary75: color__default["default"](currentTheme.primary).lighten(0.25).hex(), primary50: color__default["default"](currentTheme.primary).lighten(0.5).hex(), primary25: color__default["default"](currentTheme.primary).lighten(0.75).hex() }),
        }, placeholder: "Selecione uma op\u00E7\u00E3o", noOptionsMessage: (_) => 'Sem opções pré-definidas', ref: ref }, props), void 0));
});

const FooterActions = ({ footerActions, profile, onLogout, onManageProfile, toggleSidebar: expandSidebar, }) => {
    var _a, _b;
    const { currentTheme } = useOptTheme();
    const currentLinkColor = (_b = (_a = currentTheme.appBar.side) === null || _a === void 0 ? void 0 : _a.link.color) !== null && _b !== void 0 ? _b : currentTheme.appBar.color;
    return (jsxRuntime.jsxs(FooterActionsContainer, { children: [footerActions === null || footerActions === void 0 ? void 0 : footerActions.map((action, index) => {
                var _a, _b;
                action.iconColor = (_a = action.iconColor) !== null && _a !== void 0 ? _a : currentTheme.appBar.side.link.color;
                action.icon =
                    typeof action.icon === 'string' ? (jsxRuntime.jsx(Icon__default["default"], { size: 1.2, path: action.icon, color: (_b = action.iconColor) !== null && _b !== void 0 ? _b : currentTheme.appBar.side.link.color }, void 0)) : (action.icon);
                return (jsxRuntime.jsx(material.Tooltip, Object.assign({ title: action.title, placement: "right" }, { children: jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: action.onClick, size: "large" }, { children: action.icon }), void 0) }), index));
            }), jsxRuntime.jsx(OptAppBarAvatar, { profile: profile, onLogout: onLogout, onManageProfile: onManageProfile, fromSidebar: true }, void 0), jsxRuntime.jsx(material.Tooltip, Object.assign({ title: "Expandir", placement: "right" }, { children: jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: expandSidebar, size: "large" }, { children: jsxRuntime.jsx(Icon__default["default"], { size: 1.2, path: js.mdiChevronDoubleRight, color: currentLinkColor }, void 0) }), void 0) }), void 0)] }, void 0));
};
const ExpandedFooterActions = ({ footerActions, profile, onLogout, onManageProfile, toggleSidebar: collapseSidebar, }) => {
    var _a, _b;
    const [anchorEl, setAnchorEl] = React__default["default"].useState(null);
    const { currentTheme } = useOptTheme();
    const currentLinkColor = (_b = (_a = currentTheme.appBar.side) === null || _a === void 0 ? void 0 : _a.link.color) !== null && _b !== void 0 ? _b : currentTheme.appBar.color;
    const open = Boolean(anchorEl);
    const handleClickAvatar = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    return (jsxRuntime.jsx(ExpandedFooterActionsContainer, { children: jsxRuntime.jsxs(CustomList$1, { children: [footerActions === null || footerActions === void 0 ? void 0 : footerActions.map((action, index) => {
                    var _a, _b;
                    action.iconColor = (_a = action.iconColor) !== null && _a !== void 0 ? _a : currentTheme.appBar.side.link.color;
                    action.icon =
                        typeof action.icon === 'string' ? (jsxRuntime.jsx(Icon__default["default"], { size: 1, path: action.icon, color: (_b = action.iconColor) !== null && _b !== void 0 ? _b : currentTheme.appBar.side.link.color }, void 0)) : (action.icon);
                    return (jsxRuntime.jsxs(SidebarExpandedListItem, Object.assign({ button: true, onClick: action.onClick }, { children: [jsxRuntime.jsx(SidebarListItemIcon, { children: action.icon }, void 0), jsxRuntime.jsx(SidebarExpandedListItemText, { primary: action.title }, void 0)] }), index));
                }), profile && (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [jsxRuntime.jsx(SidebarMenuDivider$1, { style: { margin: '6px 0' } }, void 0), jsxRuntime.jsxs("div", Object.assign({ style: { display: 'flex' } }, { children: [jsxRuntime.jsxs(SidebarExpandedListItem, Object.assign({ button: true, onClick: handleClickAvatar, style: { flex: 1 } }, { children: [jsxRuntime.jsx(OptAvatar, { profile: profile }, void 0), jsxRuntime.jsx(OptAppBarAvatarPopOver, { anchorEl: anchorEl, onLogout: onLogout, onManageProfile: onManageProfile, profile: profile, open: open, fromSidebar: true }, void 0), jsxRuntime.jsx(SidebarExpandedListItemText, { primary: profile.name }, void 0)] }), void 0), jsxRuntime.jsx(material.Tooltip, Object.assign({ title: "Contrair", placement: "right" }, { children: jsxRuntime.jsx(material.IconButton, Object.assign({ onClick: collapseSidebar, size: "large" }, { children: jsxRuntime.jsx(Icon__default["default"], { size: 1.2, path: js.mdiChevronDoubleLeft, color: currentLinkColor }, void 0) }), void 0) }), void 0)] }), void 0)] }, void 0))] }, void 0) }, void 0));
};

const OptSideAppbar = ({ sections, hideLinkDescription = false, profile, onManageProfile, onLogout, footerActions, }) => {
    var _a, _b;
    const { currentTheme } = useOptTheme();
    const [expanded, setExpanded] = React.useState(false);
    const { setCurrentSideAppbarWidth } = useOptTheme();
    const currentLinkColor = (_b = (_a = currentTheme.appBar.side) === null || _a === void 0 ? void 0 : _a.link.color) !== null && _b !== void 0 ? _b : currentTheme.appBar.color;
    function toggleExpandSidebar() {
        setExpanded(!expanded);
        setCurrentSideAppbarWidth(expanded ? sideAppbarWidth : expandedSideAppbarWidth);
    }
    return (jsxRuntime.jsxs(SidebarMenuContainer, Object.assign({ expanded: expanded }, { children: [jsxRuntime.jsx(CustomList, { children: sections.map((section, index) => (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [index > 0 && jsxRuntime.jsx(SidebarMenuDivider, { style: { marginBottom: 6 } }, void 0), section.items.map((item, index) => {
                            var _a;
                            item.iconColor = (_a = item.iconColor) !== null && _a !== void 0 ? _a : currentLinkColor;
                            item.icon =
                                typeof item.icon === 'string' ? jsxRuntime.jsx(Icon__default["default"], { size: 1.2, path: item.icon, color: item.iconColor }, void 0) : item.icon;
                            return (jsxRuntime.jsxs(SidebarNavLink, Object.assign({ to: item.path, activeClassName: activeLinkClass$1, exact: item.activeShouldBeExact }, { children: [expanded && (jsxRuntime.jsxs(SidebarExpandedListItem, Object.assign({ button: true }, { children: [jsxRuntime.jsx(SidebarListItemIcon, { children: item.icon }, void 0), jsxRuntime.jsx(SidebarExpandedListItemText, { primary: item.title }, void 0)] }), void 0)), !expanded && (jsxRuntime.jsx(material.Tooltip, Object.assign({ title: item.title, placement: "right" }, { children: jsxRuntime.jsxs(SidebarListItem, Object.assign({ button: true }, { children: [jsxRuntime.jsx(SidebarListItemIcon, { children: item.icon }, void 0), !hideLinkDescription && jsxRuntime.jsx(SidebarListItemText, { primary: item.title }, void 0)] }), void 0) }), void 0))] }), index));
                        })] }, index))) }, void 0), expanded ? (jsxRuntime.jsx(ExpandedFooterActions, { footerActions: footerActions, onLogout: onLogout, onManageProfile: onManageProfile, hideLinkDescription: hideLinkDescription, profile: profile, toggleSidebar: toggleExpandSidebar }, void 0)) : (jsxRuntime.jsx(FooterActions, { footerActions: footerActions, onLogout: onLogout, onManageProfile: onManageProfile, hideLinkDescription: hideLinkDescription, profile: profile, toggleSidebar: toggleExpandSidebar }, void 0))] }), void 0));
};

const InitialContainer = styled__default["default"].div `
  display: flex;
  min-width: calc(100vw - ${({ currentsidebarwidth }) => currentsidebarwidth !== null && currentsidebarwidth !== void 0 ? currentsidebarwidth : sideAppbarWidth}px);
  max-width: calc(100vw - ${({ currentsidebarwidth }) => currentsidebarwidth !== null && currentsidebarwidth !== void 0 ? currentsidebarwidth : sideAppbarWidth}px);
  overflow-x: auto;

  ${ScrollbarCSS}
`;
const StyledOptSideLayoutPortalContainer = styled__default["default"].div `
  display: flex;
  min-width: calc(100vw - ${({ currentsidebarwidth }) => currentsidebarwidth !== null && currentsidebarwidth !== void 0 ? currentsidebarwidth : sideAppbarWidth}px);
  max-width: calc(100vw - ${({ currentsidebarwidth }) => currentsidebarwidth !== null && currentsidebarwidth !== void 0 ? currentsidebarwidth : sideAppbarWidth}px);
`;
const OptSideLayoutPortalContent = styled__default["default"].div `
  flex: 1;
  display: flex;
`;
const SideLayoutContent = styled__default["default"].div `
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${ScrollbarCSS}

  p {
    margin: 8px 0;
  }
`;

const OptSideLayout = ({ sections, routes, profile, children, onManageProfile, onLogout, appBarConfig, }) => {
    const { listen } = reactRouterDom.useHistory();
    const { state: { currentSideAppbarWidth }, } = useOptTheme();
    const containerRef = React.useRef(null);
    if (routes && routes.type !== reactRouterDom.Switch) {
        console.error('Prop routes is not a Switch!');
    }
    React.useEffect(() => {
        var _a, _b;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ left: (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth, behavior: 'smooth', top: 0 });
    }, []);
    React.useEffect(() => {
        listen(() => {
            setTimeout(() => {
                var _a, _b;
                (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ left: (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth, behavior: 'smooth', top: 0 });
            }, 300);
        });
    }, [listen]);
    return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [jsxRuntime.jsx(GlobalStyles, { noAppBar: true }, void 0), jsxRuntime.jsxs("div", Object.assign({ style: { width: '100vw', display: 'flex', overflowX: 'hidden' } }, { children: [jsxRuntime.jsx(OptSideAppbar, { sections: sections, footerActions: appBarConfig === null || appBarConfig === void 0 ? void 0 : appBarConfig.actions, profile: profile, onLogout: onLogout, onManageProfile: onManageProfile, hideLinkDescription: appBarConfig === null || appBarConfig === void 0 ? void 0 : appBarConfig.hideLinkDescription }, void 0), jsxRuntime.jsx(InitialContainer, Object.assign({ ref: containerRef, currentsidebarwidth: currentSideAppbarWidth }, { children: jsxRuntime.jsxs(OptSideLayoutPortalContent, { children: [children, routes && (jsxRuntime.jsx(React.Suspense, Object.assign({ fallback: jsxRuntime.jsxs("div", Object.assign({ style: { flex: 1, marginTop: 1 } }, { children: [jsxRuntime.jsx(material.LinearProgress, { color: "secondary" }, void 0), jsxRuntime.jsx(material.LinearProgress, { color: "primary" }, void 0)] }), void 0) }, { children: jsxRuntime.jsx(OptSideLayoutPortalContent, { children: routes }, void 0) }), void 0))] }, void 0) }), void 0)] }), void 0)] }, void 0));
};

const OptSideLayoutContent = React__default["default"].forwardRef((props, ref) => {
    return jsxRuntime.jsx(SideLayoutContent, Object.assign({}, props, { ref: ref }), void 0);
});

const OptSideLayoutPortalContainer = ({ children }) => {
    const { state: { currentSideAppbarWidth }, } = useOptTheme();
    return (jsxRuntime.jsx(StyledOptSideLayoutPortalContainer, Object.assign({ currentsidebarwidth: currentSideAppbarWidth }, { children: children }), void 0));
};

const OptSideLayoutPortal = ({ sections, children }) => {
    return (jsxRuntime.jsxs(OptSideLayoutPortalContainer, { children: [jsxRuntime.jsx(OptSidebar, { sections: sections }, void 0), jsxRuntime.jsx(OptSideLayoutPortalContent, { children: jsxRuntime.jsx(React.Suspense, Object.assign({ fallback: jsxRuntime.jsxs("div", Object.assign({ style: { flex: 1, marginTop: 1 } }, { children: [jsxRuntime.jsx(material.LinearProgress, { color: "secondary" }, void 0), jsxRuntime.jsx(material.LinearProgress, { color: "primary" }, void 0)] }), void 0) }, { children: children }), void 0) }, void 0)] }, void 0));
};

const OptSidebarFilterContainer = ({ titulo = 'Filtrar por...', background = ColorPalette.white, borderColor = 'unset', width = 280, loading = false, goBackRoute, children, }) => {
    return (jsxRuntime.jsxs(SidebarWithToolbarContainer, Object.assign({ width: width, background: background, bordercolor: borderColor }, { children: [jsxRuntime.jsx(OptActionToolbar, { title: titulo, goBackRoute: goBackRoute, clearMargin: true, noBorder: borderColor === 'unset' }, void 0), jsxRuntime.jsxs(SidebarWithToolbarContent, Object.assign({ background: background }, { children: [loading && jsxRuntime.jsx(OptLoading, { size: 30 }, void 0), !loading && jsxRuntime.jsx(material.List, { children: children }, void 0)] }), void 0)] }), void 0));
};

const MainContainer = styled__default["default"].div `
  display: block;
  color: ${ColorPalette.gray3};

  & > h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${ColorPalette.gray2};
  }

  & > ${OptChip} {
    margin: 8px 0;
  }

  & > p {
    text-align: justify;
  }
`;
styled__default["default"].div `
  padding: 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ color, theme }) => { var _a; return color !== null && color !== void 0 ? color : (_a = theme.toolbar) === null || _a === void 0 ? void 0 : _a.color; }};
  background: ${({ background, theme }) => { var _a; return background !== null && background !== void 0 ? background : (_a = theme.toolbar) === null || _a === void 0 ? void 0 : _a.background; }};
  position: sticky;
  top: 0;
  z-index: 99;
`;
const CustomSidebarNavLink = styled__default["default"](reactRouterDom.NavLink) `
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${({ color }) => color !== null && color !== void 0 ? color : ColorPalette.gray2};
  padding: 20px 16px;

  &.${ActiveLinkClass} {
    background-color: ${ColorPalette.white};
    color: ${({ theme }) => theme.primary} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.primary} !important;
      fill: ${({ theme }) => theme.primary} !important;
    }
  }
`;
const CustomListItem = styled__default["default"](material.ListItem) `
  padding: 0;
  display: block;
`;
const CreationButton = styled__default["default"](material.IconButton) `
  border: 1px solid ${({ theme }) => { var _a; return ((_a = theme.appBar.side) === null || _a === void 0 ? void 0 : _a.divider) && theme.appBar.color; }};
  border-radius: 8px;
  color: ${({ customcolor, theme }) => customcolor !== null && customcolor !== void 0 ? customcolor : theme.primary};
`;

const OptFilterLink = ({ name, to, total }) => {
    return (jsxRuntime.jsx(CustomListItem, Object.assign({ button: true }, { children: jsxRuntime.jsxs(CustomSidebarNavLink, Object.assign({ to: to, activeClassName: ActiveLinkClass }, { children: [name, jsxRuntime.jsx("span", { children: total }, void 0)] }), void 0) }), void 0));
};

const OptSidebarListBaseContainer = ({ createTo, title, background = ColorPalette.gray6, borderColor = 'unset', width = 280, goBackRoute, children, header, style, }) => {
    return (jsxRuntime.jsxs(SidebarWithToolbarContainer, Object.assign({ width: width, background: background, bordercolor: borderColor, style: style }, { children: [jsxRuntime.jsx(OptActionToolbar, Object.assign({ title: title, goBackRoute: goBackRoute, clearMargin: true, background: header === null || header === void 0 ? void 0 : header.background, color: header === null || header === void 0 ? void 0 : header.color, noBorder: borderColor === 'unset' }, { children: createTo && (jsxRuntime.jsx(reactRouterDom.NavLink, Object.assign({ to: createTo }, { children: jsxRuntime.jsx(CreationButton, Object.assign({ customcolor: header === null || header === void 0 ? void 0 : header.color }, { children: jsxRuntime.jsx(Icon__default["default"], { size: 1, path: js.mdiPlus }, void 0) }), void 0) }), void 0)) }), void 0), jsxRuntime.jsx(SidebarWithToolbarContent, Object.assign({ background: background }, { children: children }), void 0)] }), void 0));
};

const OptSidebarListContainer = ({ data, createTo, listItemTo, title, background = ColorPalette.gray6, borderColor = 'unset', width = 280, loading = false, render, goBackRoute, children, header, }) => {
    return (jsxRuntime.jsxs(OptSidebarListBaseContainer, Object.assign({ title: title, background: background, borderColor: borderColor, createTo: createTo, goBackRoute: goBackRoute, header: header, width: width }, { children: [children, loading && jsxRuntime.jsx(OptLoading, { size: 40 }, void 0), !loading && (jsxRuntime.jsx(React__default["default"].Fragment, { children: data.map((item) => (jsxRuntime.jsx(CustomListItem, Object.assign({ button: true }, { children: jsxRuntime.jsx(CustomSidebarNavLink, Object.assign({ to: listItemTo(item.id.toString()), activeClassName: ActiveLinkClass }, { children: jsxRuntime.jsx(MainContainer, { children: render(item) }, void 0) }), void 0) }), item.id))) }, void 0))] }), void 0));
};

const OptSidebarPaginatedListContainer = ({ createTo, listItemTo, title, background = ColorPalette.gray6, borderColor = 'unset', width = 280, goBackRoute, render, load, pageSize = 10, onError, header, }) => {
    return (jsxRuntime.jsx(OptSidebarListBaseContainer, Object.assign({ title: title, background: background, borderColor: borderColor, createTo: createTo, goBackRoute: goBackRoute, header: header, width: width }, { children: jsxRuntime.jsx(OptInfiniteScrollList, { carregar: load, onError: onError, pageSize: pageSize, semPesquisa: true, renderItem: (item, _) => (jsxRuntime.jsx(CustomListItem, Object.assign({ button: true }, { children: jsxRuntime.jsx(CustomSidebarNavLink, Object.assign({ to: listItemTo(item.id.toString()), activeClassName: ActiveLinkClass }, { children: jsxRuntime.jsx(MainContainer, { children: render(item) }, void 0) }), void 0) }), item.id)) }, void 0) }), void 0));
};

function OptTabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (jsxRuntime.jsx("div", Object.assign({ role: "tabpanel", hidden: value !== index }, other, { children: value === index && jsxRuntime.jsx(React__default["default"].Fragment, { children: children }, void 0) }), void 0));
}

const CustomTabAppBar = styled__default["default"](material.AppBar) `
  box-shadow: none;
  margin-bottom: 12px;
`;
CustomTabAppBar.defaultProps = {
    position: 'static',
    color: 'transparent',
};
const CustomTab = styled__default["default"](material.Tab) `
  transition: all ease-in-out 200ms;
  border-radius: 16px;
  background-color: ${ColorPalette.gray5};
  color: ${ColorPalette.gray2};
  height: 30px;

  &:hover {
    & > span {
      color: ${ColorPalette.black};
    }
  }

  & > span {
    transition: transform ease-in-out 200ms;
    color: ${ColorPalette.gray2};
  }

  &.Mui-selected {
    background-color: ${({ theme }) => theme.primary};

    & > span {
      color: ${({ theme }) => theme.primaryContrast};
    }
  }
`;
const CustomTabs = styled__default["default"](material.Tabs) `
  & ${CustomTab} {
    margin: 0 5px;
    height: 30px;

    &:first-child {
      margin: 0 5px 0 0;
    }
    &:last-child {
      margin: 0 0 0 5px;
    }
  }
`;

const useStyles$1 = makeStyles__default["default"]((_) => ({
    tabRoot: {
        minHeight: '24px',
        height: '24px',
    },
}));
const OptTab = React__default["default"].forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const classes = useStyles$1();
    return (jsxRuntime.jsx(CustomTab, Object.assign({ classes: {
            root: classes.tabRoot,
        }, ref: ref }, props), void 0));
});

const useStyles = makeStyles__default["default"]((_) => ({
    tabsRoot: {
        minHeight: '30px',
        height: '30px'
    },
    tabRoot: {
        minHeight: '24px',
        height: '24px'
    }
}));
const OptTabs = ({ tab, onChange, children }) => {
    const classes = useStyles();
    const handleChange = (_, newValue) => {
        onChange(newValue);
    };
    return (jsxRuntime.jsx(CustomTabAppBar, { children: jsxRuntime.jsx(CustomTabs, Object.assign({ classes: {
                root: classes.tabsRoot
            }, value: tab, onChange: handleChange, variant: 'fullWidth', scrollButtons: 'auto', TabIndicatorProps: {
                hidden: true
            } }, { children: children }), void 0) }, void 0));
};

const OptTagSelect = React__default["default"].forwardRef((props, ref) => {
    // todo: remover este any e readequar os tipos
    const { onChange, onBlur, value = [], name } = props;
    const { currentTheme } = useOptTheme();
    const { borderRadius, colors, spacing } = optSelectTheme;
    const [transformedValue, setTransformedValue] = React.useState([]);
    function onChangeHandler(value, _) {
        var _a, _b;
        if (!value) {
            onChange([]);
        }
        else {
            if (!Array.isArray(value)) {
                value = [value];
            }
            const simpifiedValues = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.map((x) => x.value)) !== null && _b !== void 0 ? _b : [];
            onChange(simpifiedValues);
        }
    }
    React.useEffect(() => {
        const currentValue = value !== null && value !== void 0 ? value : [];
        setTransformedValue(currentValue.map((x) => ({ label: x, value: x })));
    }, [value]);
    return (jsxRuntime.jsx(CreatableSelect__default["default"], Object.assign({}, props, { backspaceRemovesValue: true, createOptionPosition: 'first', menuPosition: 'fixed', theme: {
            borderRadius,
            spacing,
            colors: Object.assign(Object.assign({}, colors), { primary: currentTheme.primary, primary75: color__default["default"](currentTheme.primary).lighten(0.25).hex(), primary50: color__default["default"](currentTheme.primary).lighten(0.5).hex(), primary25: color__default["default"](currentTheme.primary).lighten(0.75).hex() })
        }, formatCreateLabel: (inputValue) => 'Criar tag ' + inputValue, placeholder: 'Informe as tags', noOptionsMessage: (_) => 'Sem opções pré-definidas', isMulti: true, ref: ref, value: transformedValue, name: name, onChange: onChangeHandler, onBlur: onBlur }), void 0));
});

const getBorderColor = (primaryColor, hasFiles, props) => {
    let color = ColorPalette.gray6;
    if (hasFiles) {
        color = primaryColor;
    }
    if (props.isDragAccept) {
        color = ColorPalette.green2;
    }
    if (props.isDragReject) {
        color = ColorPalette.ketchup;
    }
    return color;
};
const getTextColor = (primaryColor, hasFiles, props) => {
    let color = ColorPalette.gray4;
    if (hasFiles) {
        color = primaryColor;
    }
    if (props.isDragAccept) {
        color = ColorPalette.green;
    }
    if (props.isDragReject) {
        color = ColorPalette.ketchup;
    }
    return color;
};
const StyledUploadContainer = styled__default["default"].div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${(_a) => {
    var { hasFiles, theme } = _a, props = __rest(_a, ["hasFiles", "theme"]);
    return getBorderColor(theme.primary, hasFiles, props);
}};
  border-style: dashed;
  background-color: ${ColorPalette.white};
  color: ${(_a) => {
    var { hasFiles, theme } = _a, props = __rest(_a, ["hasFiles", "theme"]);
    return getTextColor(theme.primary, hasFiles, props);
}};
  outline: none;
  transition: all 0.24s ease-in-out;
  cursor: pointer;
  min-height: 150px;
  margin-bottom: 12px;

  &:hover {
    border-color: ${({ theme }) => color__default["default"](theme.primary).lighten(0.5).hex()};
    color: ${({ theme }) => color__default["default"](theme.primary).lighten(0.5).hex()};
  }

  & p {
    margin-top: 6px;
    font-size: 16px;
  }

  & p:last-child {
    font-size: 14px;
  }
`;
const StyledMiniUploadContainer = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size !== null && size !== void 0 ? size : 100}px;
  height: ${({ size }) => size !== null && size !== void 0 ? size : 100}px;

  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${(_a) => {
    var { hasFiles, theme } = _a, props = __rest(_a, ["hasFiles", "theme"]);
    return getBorderColor(theme.primary, hasFiles, props);
}};
  border-style: ${({ borderStyle }) => borderStyle !== null && borderStyle !== void 0 ? borderStyle : 'dashed'};
  background-color: ${ColorPalette.white};
  color: ${(_a) => {
    var { hasFiles, theme } = _a, props = __rest(_a, ["hasFiles", "theme"]);
    return getTextColor(theme.primary, hasFiles, props);
}};
  outline: none;
  transition: all 0.24s ease-in-out;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    border-color: ${({ theme }) => color__default["default"](theme.primary).lighten(0.5).hex()};
    color: ${({ theme }) => color__default["default"](theme.primary).lighten(0.5).hex()};
  }

  & p {
    margin-top: 6px;
    font-size: 16px;
  }

  & p:last-child {
    font-size: 14px;
  }
`;
const Arquivo = styled__default["default"].p `
  font-size: 14px;
  text-align: center;

  & span {
    font-weight: 500;
  }
`;

const OptMiniUpload = React__default["default"].forwardRef((_a, ref) => {
    var _b;
    var { filesDescription, onChange, options, value } = _a, props = __rest(_a, ["filesDescription", "onChange", "options", "value"]);
    const [firstRender, setFirstRender] = React.useState(true);
<<<<<<< HEAD
    const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject, } = reactDropzone.useDropzone(options);
    const hasFiles = (acceptedFiles && acceptedFiles.length > 0) ||
        (!!value && value.length > 0);
=======
    const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = reactDropzone.useDropzone(options);
    const hasFiles = (acceptedFiles && acceptedFiles.length > 0) || (!!value && value.length > 0);
>>>>>>> origin/main
    React.useEffect(() => {
        if (!firstRender) {
            onChange(acceptedFiles);
        }
        else {
            setFirstRender(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles]);
    return (jsxRuntime.jsxs(StyledMiniUploadContainer, Object.assign({ className: "opt-mini-upload", hasFiles: hasFiles, size: options === null || options === void 0 ? void 0 : options.size, borderStyle: options === null || options === void 0 ? void 0 : options.borderStyle }, getRootProps({ isDragActive, isDragAccept, isDragReject }), { ref: ref }, { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps(), props), void 0), jsxRuntime.jsx(Icon__default["default"], { path: (_b = options === null || options === void 0 ? void 0 : options.icon) !== null && _b !== void 0 ? _b : js.mdiPaperclip, size: 1.4 }, void 0)] }), void 0));
});

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0)
        return '0 Byte';
    const i = +Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

const OptUpload = React__default["default"].forwardRef((_a, ref) => {
    var { description = 'Arraste arquivos para cá ou clique para selecioná-los', filesDescription, onChange, options, value, style } = _a, props = __rest(_a, ["description", "filesDescription", "onChange", "options", "value", "style"]);
    const [firstRender, setFirstRender] = React.useState(true);
    const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = reactDropzone.useDropzone(options);
    const hasFiles = (acceptedFiles && acceptedFiles.length > 0) || (!!value && value.length > 0);
    const currentFiles = !!value ? value : acceptedFiles;
    const acceptedFileItems = currentFiles === null || currentFiles === void 0 ? void 0 : currentFiles.map((oldFile) => {
        var _a, _b;
        const file = oldFile;
        return (jsxRuntime.jsxs(Arquivo, { children: [jsxRuntime.jsx("span", { children: (_a = file.path) !== null && _a !== void 0 ? _a : file.name }, void 0), " (", bytesToSize(file.size), ")"] }, (_b = file.path) !== null && _b !== void 0 ? _b : file.name));
    });
    React.useEffect(() => {
        if (!firstRender) {
            onChange(acceptedFiles);
        }
        else {
            setFirstRender(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles]);
    return (jsxRuntime.jsxs(StyledUploadContainer, Object.assign({ hasFiles: hasFiles }, getRootProps({ isDragActive, isDragAccept, isDragReject }), { ref: ref, style: style }, { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps(), props), void 0), jsxRuntime.jsx(Icon__default["default"], { path: js.mdiPaperclip, size: 1.4 }, void 0), jsxRuntime.jsx("p", { children: description }, void 0), filesDescription && jsxRuntime.jsx("p", { children: filesDescription }, void 0), acceptedFileItems] }), void 0));
});

exports.BreadcrumbProvider = BreadcrumbProvider;
exports.OptActionButton = OptActionButton;
exports.OptActionToolbar = OptActionToolbar;
exports.OptAppBar = OptAppBar;
exports.OptAppBarAvatar = OptAppBarAvatar;
exports.OptAvatar = OptAvatar;
exports.OptBackdrop = OptBackdrop;
exports.OptBreadcrumb = OptBreadcrumb;
exports.OptChip = OptChip;
exports.OptConfirmationDialog = OptConfirmationDialog;
exports.OptDialog = OptDialog;
exports.OptDialogActions = OptDialogActions;
exports.OptDivider = OptDivider;
exports.OptDrawerMenu = OptDrawerMenu;
exports.OptFilterLink = OptFilterLink;
exports.OptGrid = OptGrid;
exports.OptInfiniteScrollList = OptInfiniteScrollList;
exports.OptLabel = OptLabel;
exports.OptLayout = OptLayout;
exports.OptLayoutProvider = OptLayoutProvider;
exports.OptLoading = OptLoading;
exports.OptMiniUpload = OptMiniUpload;
exports.OptSearchField = OptSearchField;
exports.OptSelect = OptSelect;
exports.OptSideAppbar = OptSideAppbar;
exports.OptSideLayout = OptSideLayout;
exports.OptSideLayoutContent = OptSideLayoutContent;
exports.OptSideLayoutPortal = OptSideLayoutPortal;
exports.OptSideLayoutPortalContainer = OptSideLayoutPortalContainer;
exports.OptSideLayoutPortalContent = OptSideLayoutPortalContent;
exports.OptSidebar = OptSidebar;
exports.OptSidebarFilterContainer = OptSidebarFilterContainer;
exports.OptSidebarListContainer = OptSidebarListContainer;
exports.OptSidebarPaginatedListContainer = OptSidebarPaginatedListContainer;
exports.OptTab = OptTab;
exports.OptTabPanel = OptTabPanel;
exports.OptTabs = OptTabs;
exports.OptTagSelect = OptTagSelect;
exports.OptUpload = OptUpload;
exports.SidebarContainer = SidebarContainer;
exports.expandedSideAppbarWidth = expandedSideAppbarWidth;
exports.sideAppbarWidth = sideAppbarWidth;
exports.useBreadcrumb = useBreadcrumb;
exports.useOptTheme = useOptTheme;
