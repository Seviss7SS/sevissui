import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "./Card.svelte";

const meta = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
