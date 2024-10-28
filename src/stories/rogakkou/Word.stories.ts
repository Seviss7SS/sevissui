import type { Meta, StoryObj } from "@storybook/svelte";

import Word from "./Word.svelte";

const meta = {
  title: "Rogakkou/Word",
  component: Word,
  tags: ["rogakkou"],
} satisfies Meta<Word>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
