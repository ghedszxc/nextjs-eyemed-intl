import type { Meta, StoryObj } from "@storybook/react";
import TextColumn from "@/widgets/TextColumn";

const meta: Meta<typeof TextColumn> = {
  title: "Widgets/TextColumn",
  component: TextColumn,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextColumn>;

export const Default: Story = {
  args: {
    title1: 'What you can expect from us:',
    bodyText: '<div><table><tbody><tr><td><p><strong>Marketing Support:</strong></p><p>We will promote you to customers by featuring you on our <strong>provider locator</strong> and highlighting your participation.</p></td><td><p><strong>Freedom of Choice:</strong></p><p>We will let you <strong>utilize your current eyecare products</strong> to meet your customers’ needs.</p></td><td><p><strong>Simpler Experience:</strong></p><p>Our <strong>vision specific digital portal</strong> allows you to identify benefit information, file claims, and access payments for eyewear and exams where applicable.</p></td><td><p><strong>Responsiveness:</strong></p><p>Our dedicated support team will be there to help you get started and maximize your participation.</p></td></tr></tbody></table><p><br/></p><h3>Contact us to learn more about joining our provider network!</h3></div>'
  },
};
