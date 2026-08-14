import type { Meta, StoryObj } from "@storybook/react";
import PhotoList3 from "../../widgets/PhotoList3";

const meta: Meta<typeof PhotoList3> = {
  title: "Widgets/PhotoList3",
  component: PhotoList3,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PhotoList3>;

const photo1 = {
  longText: "By highlighting you to all of our participating customers.",
  title: "More Exposure",
  photos: "/images/list1.webp",
};

const photo2 = {
  longText: "By highlighting you to all of our participating customers.",
  title: "More Exposure",
  photos: "/images/list2.webp",
};

const photo3 = {
  longText: "By highlighting you to all of our participating customers.",
  title: "More Exposure",
  photos: "/images/list3.webp",
};

export const Default: Story = {
  args: {
    header1:
      "For participating eyecare providers, we are committed to delivering a simplified and faster solution to support your customers.",
    header2: "Working with EyeMed:",
    photoList: [photo1, photo2, photo3],
  },
};

export const EyecareProviders: Story = {
  args: {
    photoList: [photo1, photo2, photo3],
  },
};
