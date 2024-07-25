import { FaCoffee, FaHeart, FaBasketballBall } from "react-icons/fa";
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
    iconLeft: {
      options: ["None", "Heart", "Coffee", "Ball"],
      mapping: {
        None: undefined,
        Heart: FaHeart,
        Coffee: FaCoffee,
        Ball: FaBasketballBall,
      },
      control: {
        type: "select",
      },
    },
    iconRight: {
      options: ["None", "Heart", "Coffee", "Ball"],
      mapping: {
        None: undefined,
        Heart: FaHeart,
        Coffee: FaCoffee,
        Ball: FaBasketballBall,
      },
      control: {
        type: "select",
      },
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
    label: "Potion name",
    description: "Give your potion an awesome name",
    placeholder: "potion name here..."
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

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    iconLeft: FaCoffee,
    label: "Coffee Input",
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    iconRight: FaHeart,
    label: "Favorite Input",
  },
};

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    iconLeft: FaCoffee,
    iconRight: FaHeart,
    label: "Coffee Love",
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
    iconLeft: FaCoffee,
    iconRight: FaHeart,
    errorMessage: "Sample error message",
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: "password",
    label: "Password Input",
    placeholder: "Enter your password",
  },
};

export const Number: Story = {
  args: {
    ...Default.args,
    type: "number",
    label: "Number Input",
    placeholder: "Enter a number",
  },
};