import type { Meta, StoryObj } from "@storybook/react";
import VideoThumb from "../../components/VideoThumb";

const meta: Meta<typeof VideoThumb> = {
  title: "Components/VideoThumb",
  component: VideoThumb,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof VideoThumb>;

export const Default: Story = {
  args: {
    url: "https://admin-eu.eyemed.com/wp-content/uploads/2024/01/eyemed-video.mp4",
  },
};
