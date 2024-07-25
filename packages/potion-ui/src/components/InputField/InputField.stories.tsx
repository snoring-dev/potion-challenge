import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: {
      control: "select",
      options: ["default"],
      description: "The variant of the input component",
    },
  },
  parameters: {
    componentSubtitle:
      "A light wrapper around the native input element that handles tedious accessibility concerns and provides more opinionated states for things like hover and focus.",
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField />
    </div>
  ),
};
