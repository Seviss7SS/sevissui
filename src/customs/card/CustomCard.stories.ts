import type { Meta, StoryObj } from "@storybook/svelte";

import CustomCard from "./CustomCard.svelte";
import { VARIANTS } from "./variants";

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
  },
};
