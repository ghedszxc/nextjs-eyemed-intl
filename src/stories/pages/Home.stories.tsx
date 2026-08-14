import type { Meta, StoryObj } from "@storybook/react";

// Components
import Home from "@/components/Pages/Home";
import Navigation from "@/widgets/Navigation";
import HeroBanner from "@/widgets/HeroBanner";
import PhotoList3 from "@/widgets/PhotoList3";
import ArticleText from "@/widgets/ArticleText";
import LRDynamicText from "@/widgets/LRDynamicText";
import Footer from "@/widgets/Footer";
import KeyFigures from "@/widgets/KeyFigures";
import PhotoList2 from "@/widgets/PhotoList2";

// Data
import { Default as NavigationData } from "@/stories/widgets/Navigation.stories";
import { Home as HeroBannerData } from "@/stories/widgets/HeroBanner.stories";
import { Default as PhotoList2Data } from "@/stories/widgets/PhotoList2.stories";
import { Default as PhotoList3Data } from "@/stories/widgets/PhotoList3.stories";
import { Default as ArticleTextData } from "@/stories/widgets/ArticleText.stories";
import { Default as LRDynamicTextData } from "@/stories/widgets/LRDynamicText.stories";
import { Default as FooterData } from "@/stories/widgets/Footer.stories";
import { Default as KeyFiguresData } from "@/stories/widgets/KeyFigures.stories";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
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

      <HeroBanner {...HeroBannerData.args} variant="large" />

      <ArticleText
        bodyText={ArticleTextData.args?.bodyText || ""}
        // subtitle={ArticleTextData.args?.subtitle || ""}
        title1={ArticleTextData.args?.title1 || ""}
        padding="both"
      />

      <KeyFigures keyFigures={KeyFiguresData.args?.keyFigures || []} />

      <PhotoList2 {...PhotoList2Data.args} />

      <PhotoList3 {...PhotoList3Data.args} />

      <LRDynamicText {...LRDynamicTextData.args} direction="left" />

      <Footer
        copyright={FooterData.args?.copyright || ""}
        links={FooterData.args?.links || []}
        social={FooterData.args?.social || []}
        subLinks={FooterData.args?.subLinks || []}
      />
    </Home>
  ),
};
