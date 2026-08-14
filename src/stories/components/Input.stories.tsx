import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    className: "",
    type: "text",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Email: Story = {
  args: {
    className: "",
    type: "email",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Password: Story = {
  args: {
    className: "",
    type: "password",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Number: Story = {
  args: {
    className: "",
    type: "number",
    placeholder: "Type here",
    disabled: false,
  },
};

export const File: Story = {
  args: {
    className: "",
    type: "file",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Tel: Story = {
  args: {
    className: "",
    type: "tel",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Date: Story = {
  args: {
    className: "",
    type: "date",
    placeholder: "Type here",
    disabled: false,
  },
};

export const DateTimeLocal: Story = {
  args: {
    className: "",
    type: "datetime-local",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Search: Story = {
  args: {
    className: "",
    type: "search",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Hidden: Story = {
  args: {
    className: "",
    type: "hidden",
    placeholder: "Type here",
    disabled: false,
  },
};

export const Submit: Story = {
  args: {
    className: "",
    type: "submit",
    placeholder: "Type here",
    disabled: false,
  },
};
