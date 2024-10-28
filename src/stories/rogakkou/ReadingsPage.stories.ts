import type { Meta, StoryObj } from "@storybook/svelte";

import Readings from "./ReadingsPage.svelte";

const meta = {
  title: "Rogakkou/ReadingsPage",
  component: Readings,
  tags: ["rogakkou"],
} satisfies Meta<Readings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
