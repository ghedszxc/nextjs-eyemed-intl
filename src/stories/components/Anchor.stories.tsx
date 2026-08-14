import Anchor from "@/components/Anchor/Anchor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: "Click me!",
    href: "#",
  },
};
