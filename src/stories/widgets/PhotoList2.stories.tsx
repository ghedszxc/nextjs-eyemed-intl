import type { Meta, StoryObj } from "@storybook/react";
import PhotoList2 from "../../widgets/PhotoList2";

const meta: Meta<typeof PhotoList2> = {
  title: "Widgets/PhotoList2",
  component: PhotoList2,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PhotoList2>;

const samplePhotos = [
  {
    title: "Broad Direct Pay Optical Networks",
    longText:
      "We build and maintain direct pay networks in partnership with leading retailers and independent providers; ensuring convenient access for your members.",
    photos: "/images/Hero-section-tablet.jpg",
  },
  {
    title: "Vision Care Specific Platform",
    longText:
      "We have a flexible and secure platform ready to support any vision benefit design with accurate and appropriate administration.",
    photos: "/images/Hero-section-tablet.jpg",
  },
  {
    title: "Empowering Vision-Care SPecific Member Tools",
    longText:
      "We bring members digital tools to make vision care easier to understand and to help your members find and access quality affordable care.",
    photos: "/images/Hero-section-tablet.jpg",
  },
  {
    title: "Collaborative Approach",
    longText:
      "With over 70+ partners and 20,000 companies with our solution, we understand the important of ease and flexibility when implementing",
    photos: "/images/Hero-section-tablet.jpg",
  },
];

export const Default: Story = {
  args: {
    sectionTitle: "Why EyeMed?",

    longText:
      "For customers (health plans, welfare funds, employers, TPA’s) we bring a comprehensive and sustainable solution to help you simplify the vision benefit experience in a more efficient and accurate manner with less paperwork.",
    photoList: samplePhotos,
  },
};

export const EyecareProviders: Story = {
  args: {
    photoList: samplePhotos,
  },
};
