import type { Meta, StoryObj } from "@storybook/svelte";

import Layout from "./Layout.svelte";

const meta = {
  title: "Rogakkou/Layout",
  component: Layout,
  tags: ["rogakkou"],
} satisfies Meta<Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
