import type { Meta, StoryObj } from "@storybook/svelte";
import { BUTTON } from "$lib/config";

import Button from "./Button.svelte";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: Object.keys(BUTTON.colors),
    },
    dark: {
      control: { type: "boolean" },
    },
    variant: {
      control: { type: "select" },
      options: Object.keys(BUTTON.variants),
    },
  },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
