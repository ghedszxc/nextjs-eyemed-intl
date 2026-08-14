import Footer from "@/widgets/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Widgets/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    links: [
      { label: "Home", url: "/" },
      { label: "Our Solution", url: "/" },
      { label: "Eyecare Providers", url: "/" },
      { label: "Contact us", url: "/" },
    ],
    subLinks: [
      { label: "Cookie Policy", url: "/" },
      { label: "Legal Notice", url: "/" },
      { label: "Accessibility", url: "/" },
      { label: "Privacy Notice", url: "/" },
    ],
    social: [
      { icon: "images/linkedin.svg", url: "/" },
    ],
    copyright: "© EYEMED VISION CARE EUROPE 2024",
  },
};
