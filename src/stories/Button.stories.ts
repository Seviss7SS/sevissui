// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";
import { definedColors } from "$lib/utils/colors.ts";

import Button from "$lib/components/Button/Button.svelte";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    label: "Button",
    variant: "btn-filled",
  },
};

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "btn-outlined",
  },
};

export const Subtle: Story = {
  args: {
    label: "Button",
    variant: "btn-subtle",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    variant: "btn-text",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
