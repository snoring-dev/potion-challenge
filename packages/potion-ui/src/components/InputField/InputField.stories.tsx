import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error"],
      description: "The variant of the input component",
    },
    size: { control: "select", options: ["normal", "small", "large"] },
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
    label: "Potion name",
    description: "Give your potion an awesome name",
    placeholder: "potion name here..."
  },
};
