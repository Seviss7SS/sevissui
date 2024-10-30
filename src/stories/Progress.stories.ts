// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Progress from "$lib/components/Progress/Progress.svelte";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    progress: 50,
    className: "w-96",
  },
};
