import {
  OptSelectionOption,
  OptTagSelect,
  OptTagSelectProps,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";

export default {
  title: "OptTagSelect",
  component: OptTagSelect,
} as Meta;

const options: ReadonlyArray<OptSelectionOption> = [
  {
    value: "Todos",
    label: "Todos os clientes",
  },
  { value: "Vendedores", label: "Vendedores" },
  { value: "Clientes", label: "Clientes" },
  { value: "Fornecedores", label: "Fornecedores" },
];

export const OptTagSelectExample: Story<OptTagSelectProps> = (args) => {
  const [value, setValue] = useState([]);

  return (
    <OptTagSelect
      options={options}
      {...args}
      value={value}
      onChange={(tags) => setValue(tags)}
    />
  );
};

OptTagSelectExample.args = {};

OptTagSelectExample.storyName = "Opt Tag Select";

OptTagSelectExample.argTypes = {};
