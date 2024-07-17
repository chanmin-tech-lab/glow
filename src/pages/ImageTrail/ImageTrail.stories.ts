import { Meta, StoryObj } from "@storybook/react";

import ImageTrail from "./ImageTrail";

const meta = {
  title: "Components/ImageTrail",
  component: ImageTrail,
  args: {},
} satisfies Meta<typeof ImageTrail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
