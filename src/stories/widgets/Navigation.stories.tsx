import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "../../widgets/Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Widgets/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    url: { locale: "", route: [] },
    legalLinks: [
      {
        label: "Cookie Policy",
        url: "/",
      },
      {
        label: "Legal Notice",
        url: "#",
      },
      {
        label: "Accessibility",
        url: "#",
      },
      {
        label: "Privacy notice",
        url: "#",
      },
    ],
    localeLinks: [
      {
        label: "English",
        url: "/",
      },
      {
        label: "Deutsch",
        url: "/",
      },
      {
        label: "Italiano",
        url: "/",
      },
    ],
    mainLinks: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Our Solution",
        url: "/our-solution",
      },
      {
        label: "Eyecare Providers",
        url: "/eyecare-providers",
      },
      {
        label: "Contact us",
        url: "/contact-us",
      },
    ],
  },
};
