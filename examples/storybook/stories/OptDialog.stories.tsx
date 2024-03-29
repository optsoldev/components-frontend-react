import { mdiDeleteOutline, mdiTestTube } from "@mdi/js";
import { Button } from "@mui/material";
import {
  OptConfirmationDialog,
  OptConfirmationDialogProps,
  OptDialog,
  OptDialogActions,
  OptDialogProps,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptDialog",
  component: OptDialog,
} as Meta;

export const OptDialogExample: Story<OptDialogProps> = (args) => (
  <OptDialog {...args}>
    <div style={{ margin: "0 12px" }}>Exemplo de OptDialog</div>
    <OptDialogActions>
      <Button>Cancelar</Button>
      <Button>Fechar</Button>
    </OptDialogActions>
  </OptDialog>
);

OptDialogExample.args = {
  title: "Confirma?",
  icon: { path: mdiTestTube, color: ColorPalette.dark },
  open: false,
  maxWidth: "sm",
  width: "",
};

OptDialogExample.argTypes = {
  onClose: {
    action: (event: {}, reason: "backdropClick" | "escapeKeyDown") =>
      "Event: " + event + " Reason: " + reason,
    table: { disable: true },
  },
  maxWidth: {
    options: ["lg", "md", "sm", "xl", "xs"],
    control: { type: "select" },
  },
};

export const OptConfirmationDialogExample: Story<OptConfirmationDialogProps> = (
  args
) => (
  <OptConfirmationDialog {...args}>
    Exemplo de OptConfirmationDialog
  </OptConfirmationDialog>
);

OptConfirmationDialogExample.args = {
  title: "Confirma?",
  icon: { path: mdiDeleteOutline, color: ColorPalette.primary },
  open: false,
  maxWidth: "sm",
  width: "",
};

OptConfirmationDialogExample.argTypes = {
  onClose: {
    action: (event: {}, reason: "backdropClick" | "escapeKeyDown") =>
      "Event: " + event + " Reason: " + reason,
    table: { disable: true },
  },
  maxWidth: {
    options: ["lg", "md", "sm", "xl", "xs"],
    control: { type: "select" },
  },
};

OptDialogExample.storyName = "Opt Dialog";
OptConfirmationDialogExample.storyName = "Opt Confirmation Dialog";
