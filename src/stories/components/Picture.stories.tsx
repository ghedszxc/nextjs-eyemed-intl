import type { Meta, StoryObj } from "@storybook/react";
import Picture from "../../components/Picture/Picture";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Picture> = {
  title: "Components/Picture",
  component: Picture,
  tags: ["autodocs"],
  argTypes: {
    src: {
      description: "Image URL",
      type: "string",
    },
    alt: {
      description: "Alt name",
      type: "string",
    },
    width: {
      description: "Image width",
      type: "number",
    },
    height: {
      description: "Image height",
      type: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Picture>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    src: "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/145314/data/picture/ea4b89dc47b8651e56d993ece6c01537.jpg?w=16&q=100",
    alt: "Alt Text",
    width: 600,
    height: 300,
    objectFit: "cover",
  },
};
