import { Meta, StoryObj } from "@storybook/react";

import InfiniteBanner from "./InfiniteBanner";

const meta = {
  title: "Components/InfiniteBanner",
  component: InfiniteBanner,
  args: {},
} satisfies Meta<typeof InfiniteBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
