import type { Meta, StoryObj } from "@storybook/react";
import ContactUsForm from "@/widgets/ContactUsForm";

const meta: Meta<typeof ContactUsForm> = {
  title: "Widgets/ContactUsForm",
  component: ContactUsForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContactUsForm>;

export const Default: Story = {
  args: {},
};
