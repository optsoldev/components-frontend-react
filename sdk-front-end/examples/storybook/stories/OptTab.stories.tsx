import { OptTab, OptTabs } from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "OptTabs",
  component: OptTabs,
} as Meta;

export const OptTabsExample: Story<{}> = (args) => {
  const [tab, setTab] = React.useState(0);

  const alterarTab = (novaTab: number) => {
    setTab(novaTab);
  };
  return (
    <OptTabs onChange={alterarTab} tab={tab}>
      <OptTab label="Splash" tabIndex={0} />
      <OptTab label="Feed" tabIndex={1} />
    </OptTabs>
  );
};

OptTabsExample.args = {};

OptTabsExample.storyName = "Opt Tabs";

OptTabsExample.argTypes = {};
