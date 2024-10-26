import type { Meta, StoryObj } from "@storybook/svelte";

import InputField from "./InputField.svelte";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder"
  },
};
