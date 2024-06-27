import { Meta, StoryObj } from "@storybook/react";

import RevealLink from "../pages/RevealLink";

const meta = {
  title: "Components/RevealLink",
  component: RevealLink,
  args: {},
} satisfies Meta<typeof RevealLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
