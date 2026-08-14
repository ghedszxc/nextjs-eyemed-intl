import FormEntry from "@/components/FormEntry";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormEntry> = {
  title: "Components/FormEntry",
  component: FormEntry,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormEntry>;

export const Default: Story = {
  args: {
    className: "",
    name: "name",
    label: "name",
    htmlFor: "name",
    render: <Input id="name" placeholder="Type here" />,
    error: "",
    required: false,
  },
};
