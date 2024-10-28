import type { Meta, StoryObj } from "@storybook/svelte";

import ReadingPage from "./ReadingPage.svelte";

const meta = {
  title: "Rogakkou/ReadingPage",
  component: ReadingPage,
  tags: ["rogakkou"],
} satisfies Meta<ReadingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
