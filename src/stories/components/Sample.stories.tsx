import type { Meta, StoryObj } from "@storybook/react";

const Sample = () => {
  return (
    <div className="max-w-3xl m-auto font-bold text-5xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro doloribus
      consectetur eligendi accusantium magnam ipsum nihil a impedit sint nam?
    </div>
  );
};
const meta: Meta<typeof Sample> = {
  title: "Components/Sample",
  component: Sample,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sample>;

export const Default: Story = {
  args: {},
};
