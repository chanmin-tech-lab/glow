import { Meta, StoryObj } from "@storybook/react";

import PointerTrail from "./PointerTrail";

const meta = {
  title: "Components/PointerTrail",
  component: PointerTrail,
  args: {},
} satisfies Meta<typeof PointerTrail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
