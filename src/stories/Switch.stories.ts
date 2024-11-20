// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Switch from "$lib/components/Switch/Switch.svelte";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
