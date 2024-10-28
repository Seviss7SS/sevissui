import type { Meta, StoryObj } from "@storybook/svelte";

import Sentence from "./Sentence.svelte";

const meta = {
  title: "Rogakkou/Sentence",
  component: Sentence,
  tags: ["rogakkou"],
} satisfies Meta<Sentence>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
