import type { Meta, StoryObj } from "@storybook/react";

// Components
import Home from "@/components/Pages/Home";
import Navigation from "@/widgets/Navigation";
import HeroBanner from "@/widgets/HeroBanner";
import Footer from "@/widgets/Footer";

// Data
import { Default as NavigationData } from "@/stories/widgets/Navigation.stories";
import { ContactUs as HeroBannerData } from "@/stories/widgets/HeroBanner.stories";
import { Default as FooterData } from "@/stories/widgets/Footer.stories";
import Container from "@/components/Container";
import ContactUs from "@/widgets/ContactUsForm";

const meta: Meta<typeof Home> = {
  title: "Pages/Contact Us",
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
      <HeroBanner
        {...HeroBannerData.args}
        picture={undefined}
        variant="small"
      />
      <Container className="my-20">
        <p className="text-2xl font-bold text-center mb-7">
          For any inquiries, please fill in the contact form.
        </p>
        <ContactUs form={[]} />
      </Container>
      <Footer
        copyright={FooterData.args?.copyright || ""}
        links={FooterData.args?.links || []}
        social={FooterData.args?.social || []}
        subLinks={FooterData.args?.subLinks || []}
      />
    </Home>
  ),
};
