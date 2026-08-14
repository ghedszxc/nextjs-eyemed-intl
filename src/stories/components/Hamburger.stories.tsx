import Hamburger from "@/components/Hamburger";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hamburger> = {
  title: "Components/Hamburger",
  component: Hamburger,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};
