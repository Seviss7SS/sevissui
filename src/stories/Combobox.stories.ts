// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import Combobox from "$lib/components/Combobox/Combobox.svelte";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      { value: "mango", label: "Mango" },
      { value: "watermelon", label: "Watermelon" },
      { value: "apple", label: "Apple" },
      { value: "pineapple", label: "Pineapple" },
      { value: "orange", label: "Orange" },
    ],
    multiple: false,
  },
};
