// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Pagination from "../lib/components/Pagination/Pagination.svelte";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    total: 1000,
    pageSize: 50,
  },
};
