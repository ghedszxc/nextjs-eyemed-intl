import Icon from "@/components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    type: "EMArrowDown",
    className: "stroke-black",
  },
};
