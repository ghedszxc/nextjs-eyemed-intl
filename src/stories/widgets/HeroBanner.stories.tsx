import type { Meta, StoryObj } from "@storybook/react";
import HeroBanner from "../../widgets/HeroBanner";
import { getAdapterCroppings } from "@/logic/utilities";

const meta: Meta<typeof HeroBanner> = {
  title: "Widgets/HeroBanner",
  component: HeroBanner,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

const pictures = [
  {
    id: "154584",
    name: "ImageBlock1",
    title: "ImageBlock",
    type: "CMPicture",
    detailText: {text: ""},
    segment: "imageblock",
    uriTemplate: "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/171560/data/0002e32b6e1b8a6386b60d9b24386198/{cropName}/{width}/homebanner.jpg",
    data: {
      uri: "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/154584/data/picture/923a20c84beccc88e4022d240b75bd8c.jpg",
      contentType: "image/jpeg",
    },
    crops: [
      {
        aspectRatio: {
          height: 1,
          width: 2,
        },
        name: "News316X220",
        sizes: [
          {
            height: 200,
            width: 316,
          },
        ],
        minWidth: 316,
      },
      {
        aspectRatio: {
          height: 1,
          width: 2,
        },
        name: "LRDynmic1920",
        sizes: [
          {
            height: 1080,
            width: 1920,
          },
        ],
        minWidth: 1920,
      },
      {
        aspectRatio: {
          height: 1,
          width: 2,
        },
        name: "News436x303",
        sizes: [
          {
            height: 303,
            width: 436,
          },
        ],
        minWidth: 436,
      },
      {
        aspectRatio: {
          height: 29,
          width: 23,
        },
        name: "NewsHeroMobile390X640",
        sizes: [
          {
            height: 390,
            width: 640,
          },
        ],
        minWidth: 640,
      },
      {
        aspectRatio: {
          height: 1,
          width: 2,
        },
        name: "RA1140X648",
        sizes: [
          {
            height: 648,
            width: 1140,
          },
        ],
        minWidth: 1140,
      },
      {
        aspectRatio: {
          height: 29,
          width: 23,
        },
        name: "RA375X520",
        sizes: [
          {
            height: 520,
            width: 375,
          },
        ],
        minWidth: 375,
      },
    ],
    caption: null,
    subjectTaxonomy: [],
  },
];

export const Home: Story = {
  args: {
    title1: "Explore a new vision with us!",
    variant: "large",
  },
};

export const OurSolution: Story = {
  args: {
    title1: "Our Solution",
    variant: "large",
  },
};

export const EyecareProviders: Story = {
  args: {
    title1: "Eyecare Providers",
    variant: "large",
  },
};

export const ContactUs: Story = {
  args: {
    picture: getAdapterCroppings(pictures)[0],
    title1: "Contact Us",
    variant: "small"
  },
};

export const Accessibility: Story = {
  args: {
    picture: getAdapterCroppings(pictures)[0],
    title1: "Accessibility Statement",
    variant: "small"
  },
};

export const PrivacyNotice: Story = {
  args: {
    picture: getAdapterCroppings(pictures)[0],
    title1: "Privacy Notice",
    variant: "small"
  },
};

export const CookiePolicy: Story = {
  args: {
    picture: getAdapterCroppings(pictures)[0],
    title1: "Cookie Policy",
    variant: "small"
  },
};

export const LegalNotice: Story = {
  args: {
    picture: getAdapterCroppings(pictures)[0],
    title1: "Legal Notice",
    variant: "small"
  },
};
