import type { Meta, StoryObj } from "@storybook/react";
import LRDynamicText from "../../widgets/LRDynamicText";

const meta: Meta<typeof LRDynamicText> = {
  title: "Widgets/LRDynamicText",
  component: LRDynamicText,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LRDynamicText>;

export const Default: Story = {
  args: {
    header2: "Broad Direct Pay Optical Networks",
    longText: `<div><p>We build and maintain direct pay networks in partnership with leading retailers and independent providers; ensuring convenient access for your members:</p><ul><li>Direct Pay: Members will only pay their out-of-pocket after the benefit is applied with a more paperless and simpler experience.</li><li>The Right Mix: We partner with quality independents and some of the leading retailers across Europe.</li><li>Accessible: With our partnerships across the optical landscape, we guarantee coverage at a national scale for your specific members or employees.</li></ul></div>`,
    picture: "/images/video1.jpeg",
    direction: "right",
    video:
      "https://admin-eu.eyemed.com/wp-content/uploads/2024/01/eyemed-video.mp4",
    bg: "md:bg-card",
  },
};

export const OurSolution: Story = {
  args: {
    header1: "Our solution, informed by 35+ years in the market delivers:",
    header2: "Broad Direct Pay Optical Networks",
    longText: `<div><p>We build and maintain direct pay networks in partnership with leading retailers and independent providers; ensuring convenient access for your members:</p><ul><li>Direct Pay: Members will only pay their out-of-pocket after the benefit is applied with a more paperless and simpler experience.</li><li>The Right Mix: We partner with quality independents and some of the leading retailers across Europe.</li><li>Accessible: With our partnerships across the optical landscape, we guarantee coverage at a national scale for your specific members or employees.</li></ul></div>`,
    picture: "/images/LRDynamic.png",
    direction: "left",
    bg: "md:bg-card",
  },
};

export const OurSolution_2: Story = {
  args: {
    header2: "Vision Care Specific Platform",
    longText: `<div><p>We have a flexible&nbsp;and secure platform equipped to manage a wide variety of benefits and designed to ensure accurate and appropriate administration of vision-specific claims; our platform delivers:</p><ul>
    <li>Flexibility to support new or existing products for eye care.</li><li>Security and processes aligned to GDPR and ISO standards.</li><li>Extensive controls including pre-authorization, documentation review (prescriptions, invoices) and post-utilization analytics to identify anomalies.</li><li>Comprehensive programs to ensure accurate and appropriate administration.</li><li>How We Control:<ul style="list-style: none;"><li>✓ Before – Vision-specific training for claims staff</li><li>✓ During – Real-time benefit eligibility check, Purchase price validation, Rx and document validation</li><li>✓ After – Ongoing trend analysis, Outlier detection, Random Audits</li></ul></li></ul></div>`,
    picture: "/images/LR2.webp",
    direction: "left",
  },
};

export const OurSolution_3: Story = {
  args: {
    header2: "Empowering Vision-Care Specific Member Tools",
    longText: `<div><p>We deliver digital tools to help your members better understand their vision care and to help them find and access quality affordable care:</p><ul><li>White-label member application with benefits information, a provider locator, and education for members.</li><li>Seamless integration via single sign-on.</li><li>Enhanced offerings, which take the vision care benefits that much further.</li></ul></div>`,
    picture: "/images/LR3.webp",
    direction: "left",
    bg: "md:bg-card",
  },
};

export const OurSolution_4: Story = {
  args: {
    header2: "Collaborative Approach",
    longText: `<div><p>We understand the importance of making implementations easy and provide flexible guided options for integration that include:</p><ul><li>An Implementation approach that provides an easy, hands-free experience with a level of flexibility that allows our clients and partners to be as involved as they want to be.</li><li>An Account Management model that is there to support you with any questions or any urgent needs that may come up.</li></ul></div>`,
    picture: "/images/LR4.webp",
    direction: "left",
  },
};
