import type { Meta, StoryObj } from "@storybook/react";
import { FaCoffee, FaHeart, FaBasketballBall } from "react-icons/fa";
import { Button, IconButton } from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["default", "small", "large"] },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "critical",
        "transparent",
        "info",
        "success",
        "warning",
        "danger",
      ],
    },
    onClick: { action: "clicked" },
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
};

export default meta;

type Story = StoryObj<typeof Button>;
type IconStory = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    label: "Hello world",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    iconLeft: FaCoffee,
    iconRight: FaHeart,
  },
};

export const Icon: IconStory = {
  args: {
    icon: FaCoffee,
    variant: 'default',
    size: 'default',
  },
};
