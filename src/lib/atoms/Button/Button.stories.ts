import type { Meta, StoryObj } from "@storybook/svelte";
import { BUTTON } from "$lib/config.js";
import { definedColors } from "$lib/utils/colors.ts";

import Button from "./Button.svelte";

const meta = {
  title: "Atoms/Button",
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
    variant: "filled",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "outlined",
    color: "primary",
  },
};

export const Subtle: Story = {
  args: {
    label: "Button",
    variant: "subtle",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    variant: "text",
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
