import type { Meta, StoryObj } from "@storybook/react";

// Components
import Home from "@/components/Pages/Home";
import Navigation from "@/widgets/Navigation";
import HeroBanner from "@/widgets/HeroBanner";
import ArticleText from "@/widgets/ArticleText";
import Footer from "@/widgets/Footer";

// Data
import { Default as NavigationData } from "@/stories/widgets/Navigation.stories";
import { Accessibility as HeroBannerData } from "@/stories/widgets/HeroBanner.stories";
import { Accessibility as AccessibilityData } from "@/stories/widgets/ArticleText.stories";
import { Default as FooterData } from "@/stories/widgets/Footer.stories";


const meta: Meta<typeof Home> = {
  title: "Pages/Accessibility",
  component: Home,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: (args) => (
    <Home {...args}>
      <Navigation
        legalLinks={NavigationData.args?.legalLinks || []}
        localeLinks={NavigationData.args?.localeLinks || []}
        mainLinks={NavigationData.args?.mainLinks || []}
      />

      <HeroBanner {...HeroBannerData.args} picture={undefined} variant="small" />

      <ArticleText
        bodyText={AccessibilityData.args?.bodyText || ""}
        title1=""
        padding="both"
      />

      <Footer
        copyright={FooterData.args?.copyright || ""}
        links={FooterData.args?.links || []}
        social={FooterData.args?.social || []}
        subLinks={FooterData.args?.subLinks || []}
      />
    </Home>
  ),
};
