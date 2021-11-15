import { OptAvatar, OptAvatarProps, OptUserProfile } from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptAvatar",
  component: OptAvatar,
} as Meta;

let userProfile: OptUserProfile = {
  name: "João Carlos da Silva",
  email: "falecomjoao@gmail.com",
  avatarSrc: "",
  alternativeColor: ColorPalette.primary,
};

export const OptAvatarExample: Story<OptAvatarProps> = (args) => (
  <OptAvatar {...args}></OptAvatar>
);

OptAvatarExample.args = {
  size: 64,
  profile: userProfile,
};
