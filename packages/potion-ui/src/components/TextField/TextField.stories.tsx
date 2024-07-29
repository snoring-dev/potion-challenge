import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./";

const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
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
      "A light wrapper around the native textarea element that handles tedious accessibility concerns and provides more opinionated states for things like hover and focus.",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    variant: "default",
    label: "Potion name",
    description: "Give your potion an awesome name",
    placeholder: "potion name here...",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    variant: "error",
    errorMessage: "This field is required",
    value: "",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    label: "Small Input",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    label: "Large Input",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: "Disabled Input",
  },
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    label: undefined,
    placeholder: "No label input",
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: undefined,
    label: "No Description Input",
  },
};

export const FullyConfigured: Story = {
  args: {
    variant: "default",
    size: "normal",
    label: "Fully Configured Input",
    description: "This input has all properties set",
    placeholder: "Type here...",
    errorMessage: "Sample error message",
  },
};
