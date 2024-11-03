// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";

import CustomCard from "$lib/customs/card/CustomCard.svelte";
import { VARIANTS } from "$lib/customs/card/variants.ts";

const meta = {
  title: "Customs/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: Object.keys(VARIANTS),
    },
  },
} satisfies Meta<CustomCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant1: Story = {
  args: {
    variant: "variant1",
    imgSrc:
      "https://images.unsplash.com/photo-1714679374077-830e435178b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    class: "h-48",
    title: "Variant1",
    clickable: true,
  },
};
