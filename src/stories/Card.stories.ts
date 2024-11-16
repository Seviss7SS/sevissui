// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "$lib/components/Card/Card.svelte";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
