import {
  mdiBed,
  mdiCalendar,
  mdiCloseCircle,
  mdiFileMultiple,
  mdiPacMan,
  mdiPencil,
  mdiStrategy,
  mdiThumbDown,
  mdiThumbUp,
} from "@mdi/js";
import {
  OptActionButton,
  OptActionToolbar,
  OptActionToolbarProps,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptActionToolbar",
  component: OptActionToolbar,
} as Meta;

export const OptActionToolbarExample: Story<
  OptActionToolbarProps & { reprovarLoading: boolean; anexosDisabled: boolean }
> = (args) => (
  <OptActionToolbar {...args}>
    <OptActionButton
      startIcon={{ path: mdiPencil, color: ColorPalette.curiousBlue }}
    >
      Editar
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiThumbUp, color: ColorPalette.primary }}
    >
      Aprovar proposta
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiThumbDown, color: ColorPalette.ketchup }}
      loading={args.reprovarLoading}
    >
      Reprovar proposta
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiFileMultiple, color: ColorPalette.secondary }}
      disabled={args.anexosDisabled}
    >
      Anexos
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiCloseCircle, color: ColorPalette.ketchup }}
    >
      Cancelar proposta
    </OptActionButton>
  </OptActionToolbar>
);

export const OptActionToolbarExample2: Story<
  OptActionToolbarProps & { loading: boolean; disabled: boolean }
> = (args) => (
  <OptActionToolbar {...args}>
    <OptActionButton endIcon={{ path: mdiPacMan, color: ColorPalette.yellow }}>
      Pacman
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiCalendar, color: ColorPalette.curiousBlue }}
      disabled={args.disabled}
    >
      Calendar
    </OptActionButton>
    <OptActionButton
      startIcon={{ path: mdiBed, color: ColorPalette.black }}
      endIcon={{ path: mdiStrategy, color: ColorPalette.green }}
      loading={args.loading}
    >
      Dois ícones
    </OptActionButton>
  </OptActionToolbar>
);

OptActionToolbarExample.args = {
  title: "Proposta de adesão",
  reprovarLoading: true,
  anexosDisabled: true,
  color: "#000",
};

OptActionToolbarExample2.args = {
  title: "Toolbar teste",
  loading: false,
  disabled: false,
  color: "#000",
};

OptActionToolbarExample.storyName = "Opt Action Toolbar 1";
OptActionToolbarExample2.storyName = "Opt Action Toolbar 2";
