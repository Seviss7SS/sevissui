import type { Meta, StoryObj } from "@storybook/svelte";
import { BUTTON } from "$lib/config.js";

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

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "filled",
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
