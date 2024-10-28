import type { Meta, StoryObj } from "@storybook/svelte";

import Login from "./LoginPage.svelte";

const meta = {
  title: "Rogakkou/LoginPage",
  component: Login,
  tags: ["rogakkou"],
} satisfies Meta<Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
