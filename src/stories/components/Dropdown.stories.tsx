import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "@/components/Dropdown";

// import { Input } from "@/components/ui/input";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown (Shad)",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Country of residence",
    placeholder: "Type here",
  },
};
