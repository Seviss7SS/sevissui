import type { Meta, StoryObj } from "@storybook/svelte";

import Sidebar from "./Sidebar.svelte";

const meta = {
  title: "Rogakkou/Sidebar",
  component: Sidebar,
  tags: ["rogakkou"],
} satisfies Meta<Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
