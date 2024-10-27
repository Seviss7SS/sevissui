import type { Meta, StoryObj } from "@storybook/svelte";

import Login from "./Login.svelte";

const meta = {
  title: "Rogakkou/Login",
  component: Login,
  tags: ["rogakkou"],
} satisfies Meta<Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
