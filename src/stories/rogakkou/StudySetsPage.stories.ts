import type { Meta, StoryObj } from "@storybook/svelte";

import StudySetsPage from "./StudySetsPage.svelte";

const meta = {
  title: "Rogakkou/StudySetsPage",
  component: StudySetsPage,
  tags: ["rogakkou"],
} satisfies Meta<StudySetsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
