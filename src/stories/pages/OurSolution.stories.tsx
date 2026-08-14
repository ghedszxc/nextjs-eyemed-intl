import type { Meta, StoryObj } from "@storybook/react";

// Components
import Home from "@/components/Pages/Home";
import Navigation from "@/widgets/Navigation";
import HeroBanner from "@/widgets/HeroBanner";
import ArticleText from "@/widgets/ArticleText";
import LRDynamicText from "@/widgets/LRDynamicText";
import Footer from "@/widgets/Footer";

// Data
import { Default as NavigationData } from "@/stories/widgets/Navigation.stories";
import { OurSolution as HeroBannerData } from "@/stories/widgets/HeroBanner.stories";
import { OurSolution as ArticleTextData } from "@/stories/widgets/ArticleText.stories";
import {
  OurSolution as LRDynamicTextData,
  OurSolution_2 as LRDynamicTextData2,
  OurSolution_3 as LRDynamicTextData3,
  OurSolution_4 as LRDynamicTextData4,
} from "@/stories/widgets/LRDynamicText.stories";
import { Default as FooterData } from "@/stories/widgets/Footer.stories";

const meta: Meta<typeof Home> = {
  title: "Pages/Our Solution",
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

      <HeroBanner {...HeroBannerData.args} variant="medium" />

      <ArticleText
        bodyText={ArticleTextData.args?.bodyText || ""}
        // subtitle={ArticleTextData.args?.subtitle || ""}
        title1={ArticleTextData.args?.title1 || ""}
      />

      <LRDynamicText {...LRDynamicTextData.args} direction="left" />
      <LRDynamicText {...LRDynamicTextData2.args} direction="right" />
      <LRDynamicText {...LRDynamicTextData3.args} direction="left" />
      <LRDynamicText {...LRDynamicTextData4.args} direction="right" />

      <Footer
        copyright={FooterData.args?.copyright || ""}
        links={FooterData.args?.links || []}
        social={FooterData.args?.social || []}
        subLinks={FooterData.args?.subLinks || []}
      />
    </Home>
  ),
};
