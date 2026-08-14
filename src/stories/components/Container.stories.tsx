import type { Meta, StoryObj } from "@storybook/react";
import Container from "../../components/Container";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1 className="font-bold text-3xl">Lorem ipsum dolor sit.</h1>
        <p className="font-body text-lg mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          exercitationem deleniti quae commodi natus! Ipsam consectetur harum
          eum impedit eligendi.
        </p>
        <Button variant="secondary">Click me</Button>
      </div>
    ),
  },
};
