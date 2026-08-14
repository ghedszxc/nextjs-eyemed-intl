import type { Meta, StoryObj } from "@storybook/react";
import PhotoList1 from "../../widgets/PhotoList1";
import { IPhotoList } from "@/widgets/PhotoList1/PhotoList1.interface";

const meta: Meta<typeof PhotoList1> = {
  title: "Widgets/PhotoList1",
  component: PhotoList1,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PhotoList1>;

const photo: IPhotoList = {
  uri: "/images/Hero-section-tablet.jpg",
  contentType: "",
  size: 0,
};

const ctaBtn = {
  label: "Click here to learn more",
  url: "/",
  // isFileDownload: false,
  isExternal: true,
  // dataDesc?: string;
};

export const Default: Story = {
  args: {
    title1: "The Powered by EyeMed Di|erence",
    longText:
      "For Partners (health plans, welfare funds, TPAs) we bring a comprehensive and sustainable solution to help you elevate the vision benefit experience in a more efficient and accurate manner while drastically reducing the need for paper receipts and documentation.",
    photoList: [photo, photo, photo, photo],

    ctaButton: ctaBtn,
    quoteText:
      "*footnote: combined statistics for EyeMed Vision Care and ASE Corporate Eye Care",
  },
};

export const Home: Story = {
  args: {
    title1: "Why EyeMed?",
    longText:
      "For customers (health plans, welfare funds, employers, TPA’s) we bring a comprehensive and sustainable solution to help you simplify the vision benefit experience in a more efficient and accurate manner with less paperwork.be",
    photoList: [photo, photo, photo, photo],
  },
};

export const EyecareProviders: Story = {
  args: {
    photoList: [photo, photo, photo, photo],
  },
};
