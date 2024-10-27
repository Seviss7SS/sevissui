import type { Meta, StoryObj } from "@storybook/svelte";

import Readings from "./Readings.svelte";

const meta = {
  title: "Rogakkou/Readings",
  component: Readings,
  tags: ["rogakkou"],
} satisfies Meta<Readings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
