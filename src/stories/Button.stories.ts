// @ts-nocheck

import type { Meta, StoryObj } from "@storybook/svelte";
import { BUTTON } from "$lib/config.js";
import { definedColors } from "$lib/utils/colors.ts";

import Button from "$lib/components/Button/Button.svelte";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: Object.keys(definedColors),
    },
    variant: {
      control: { type: "select" },
      options: Object.keys(BUTTON.variants),
    },
    theme: {
      control: { type: "select" },
      options: ["base", "light", "dark", "contrast"],
    },
  },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    label: "Button",
    variant: "btn-filled-primary-base",
  },
};

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "btn-outlined-primary-base",
  },
};

export const Subtle: Story = {
  args: {
    label: "Button",
    variant: "btn-subtle-primary-base",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    variant: "btn-text-primary-base",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
