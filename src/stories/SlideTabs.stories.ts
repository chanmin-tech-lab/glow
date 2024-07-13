import { Meta, StoryObj } from "@storybook/react";

import SlideTabs from "../pages/SlideTabs";

const meta = {
  title: "Components/SlideTabs",
  component: SlideTabs,
  args: {},
} satisfies Meta<typeof SlideTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
