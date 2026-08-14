import type { Meta, StoryObj } from "@storybook/react";
import KeyFigures from "@/widgets/KeyFigures";

const meta: Meta<typeof KeyFigures> = {
  title: "Widgets/KeyFigures",
  component: KeyFigures,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof KeyFigures>;

const keyFigures = [
  {
    value: "35 +",
    description: "Years focused on the delivery of vision care solutions",
  },
  {
    value: "72 +",
    description: "Million members serviced globally",
  },
  {
    value: "20,000 +",
    description: "Company clients with our solution",
  },
  {
    value: "70 +",
    description: "Partnerships with health and welfare plans",
  },
];

export const Default: Story = {
  args: {
    keyFigures,
  },
};
