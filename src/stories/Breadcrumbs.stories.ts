// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Breadcrumbs from "$lib/components/Breadcrumbs/Breadcrumbs.svelte";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
