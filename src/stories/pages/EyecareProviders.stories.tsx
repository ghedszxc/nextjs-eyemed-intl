import type { Meta, StoryObj } from "@storybook/react";

// Components
import Home from "@/components/Pages/Home";
import Navigation from "@/widgets/Navigation";
import HeroBanner from "@/widgets/HeroBanner";
import PhotoList3 from "@/widgets/PhotoList3";
import Footer from "@/widgets/Footer";
import TextColumn from "@/widgets/TextColumn";

// Data
import { Default as NavigationData } from "@/stories/widgets/Navigation.stories";
import { EyecareProviders as HeroBannerData } from "@/stories/widgets/HeroBanner.stories";
import { EyecareProviders as ArticleTextData } from "@/stories/widgets/ArticleText.stories";
import { EyecareProviders as PhotoList3Data } from "@/stories/widgets/PhotoList3.stories";
import { Default as FooterData } from "@/stories/widgets/Footer.stories";
import { Default as TextColumnData } from "@/stories/widgets/TextColumn.stories";
import ArticleText from "@/widgets/ArticleText";

const meta: Meta<typeof Home> = {
  title: "Pages/Eyecare Providers",
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
        padding="top"
      />

      <PhotoList3 {...PhotoList3Data.args} padding="bottom" />

      <TextColumn
        // columns={TextColumnData.args?.columns || []}
        bodyText={TextColumnData.args?.bodyText || ""}
        title1={TextColumnData.args?.title1 || ""}
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
