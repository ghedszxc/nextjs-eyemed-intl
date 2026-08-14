import type { Meta, StoryObj } from "@storybook/react";
import Video from "../../components/Video";

const meta: Meta<typeof Video> = {
  title: "Components/Video",
  component: Video,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    url: "https://admin-eu.eyemed.com/wp-content/uploads/2024/01/eyemed-video.mp4",
  },
};
