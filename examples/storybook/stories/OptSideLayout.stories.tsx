import {
  mdiAccessPointPlus,
  mdiAccountSupervisorCircle,
  mdiBellOutline,
  mdiCogs,
  mdiFileDocument,
  mdiFolderTable,
} from '@mdi/js';
import {
  OptLayoutProvider,
  OptMenuSection,
  OptSideLayout,
  OptTheme,
} from '@optsol/react';
import { OptMainSidebarFooterAction } from '@optsol/react/lib/esm/components/OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions';
import { ComponentMeta, Story } from '@storybook/react';

import { ColorPalette } from '../shared/colors';
import { optLogo } from '../shared/optLogo';

export default {
  title: 'OptSideLayout',
  component: OptSideLayout,
} as ComponentMeta<typeof OptSideLayout>;

const Template: Story<
  typeof OptSideLayout & {
    hasProfile: boolean;
    expandable: boolean;
    limitedSectionsView: boolean;
    appBarConfigActions: boolean;
    appBarConfigHideLinkDescription: boolean;
    appBarExpandedSideAppbarWidth?: number;
    appBarSideAppbarWidth?: number;
    appBarSectionsAlignment: 'start' | 'center' | 'end';
  }
> = (args) => {
  const theme: OptTheme = {
    light: {
      style: 'soft',
      primary: ColorPalette.green2,
      primaryContrast: ColorPalette.white,
      secondary: ColorPalette.green3,
      secondaryContrast: ColorPalette.white,
    },
  };

  let userProfile;
  if (args.hasProfile) {
    userProfile = {
      name: 'Luciano Rocha',
      email: 'rochinha@email.com.br',
      avatarSrc: '',
    };
  }

  const sectionsArray: OptMenuSection[] = [
    {
      title: 'Main',
      items: [
        {
          title: 'Documents',
          path: '/documents',
          icon: mdiFileDocument,
        },
        {
          title: 'Folder',
          path: '/folder',
          icon: mdiFolderTable,
        },
        {
          title: 'Account',
          path: '/account',
          icon: mdiAccountSupervisorCircle,
        },
        {
          title: 'Documents',
          path: '/documents',
          icon: mdiFileDocument,
        },
        {
          title: 'Documents2',
          path: '/documents6',
          icon: mdiFileDocument,
        },
        {
          title: 'Documents3',
          path: '/documents5',
          icon: mdiFileDocument,
        },
        {
          title: 'Documents4',
          path: '/documents4',
          icon: mdiFileDocument,
        },
        {
          title: 'Documents5',
          path: '/documents3',
          icon: mdiBellOutline,
        },
        {
          title: 'Documents6',
          path: '/documents2',
          icon: mdiAccessPointPlus,
        },
        {
          title: 'Documents7',
          path: '/documents2',
          icon: mdiAccessPointPlus,
        },
      ],
    },
  ];

  let actionsArrayAppBarConfig: OptMainSidebarFooterAction[] = [];

  if (args.appBarConfigActions) {
    actionsArrayAppBarConfig = [
      {
        title: 'Alert',
        icon: mdiBellOutline,
        qtdNotifications: 1,
        iconColor: ColorPalette.green3,
        onClick: () => {},
      },
      {
        title: 'Config',
        icon: mdiCogs,
        iconColor: ColorPalette.green3,
        onClick: () => {},
      },
    ];
  }

  const AppBarConfigExample = {
    actions: actionsArrayAppBarConfig,
    hideLinkDescription: args.appBarConfigHideLinkDescription,
    expandedSideAppbarWidth: args.appBarExpandedSideAppbarWidth,
    limitedSectionsView: args.limitedSectionsView,
    sideAppbarWidth: args.appBarSideAppbarWidth,
    sectionsAlignment: args.appBarSectionsAlignment,
  };

  console.log(args.expandable);

  const props = {
    profile: userProfile,
    expandable: args.expandable,
    limitedSectionsView: args.limitedSectionsView,
  };

  return (
    <OptLayoutProvider theme={theme} noRouter>
      <OptSideLayout
        //routes={}
        logo={{ icon: optLogo, iconColor: 'transparent', path: '/' }}
        sections={sectionsArray}
        onManageProfile={() => {}}
        onLogout={() => {}}
        appBarConfig={AppBarConfigExample}
        {...props}
        version="1.0.0"
      />
    </OptLayoutProvider>
  );
};

export const OptSideLayoutExample = Template.bind({});

OptSideLayoutExample.args = {
  appBarConfigActions: true,
  appBarConfigHideLinkDescription: true,
  appBarSideAppbarWidth: 50,
  appBarExpandedSideAppbarWidth: 250,
  appBarSectionsAlignment: 'center',
  hasProfile: true,
  limitedSectionsView: false,
  expandable: false,
};

OptSideLayoutExample.storyName = 'Opt Side Layout';
