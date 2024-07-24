import type { Meta, StoryObj } from "@storybook/react";
import { FaCoffee, FaHeart, FaBasketballBall } from "react-icons/fa";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["default", "small", "large"] },
    onClick: { action: "clicked" },
    iconLeft: { 
      options: ['None', 'Heart', 'Coffee', 'Ball'],
      mapping: {
        None: undefined,
        Heart: FaHeart,
        Coffee: FaCoffee,
        Ball: FaBasketballBall,
      },
      control: { 
        type: 'select' 
      }
    },
    iconRight: { 
      options: ['None', 'Heart', 'Coffee', 'Ball'],
      mapping: {
        None: undefined,
        Heart: FaHeart,
        Coffee: FaCoffee,
        Ball: FaBasketballBall,
      },
      control: { 
        type: 'select' 
      }
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Hello world",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const WithIcons: Story = {
  args: {
    ...Primary.args,
    iconLeft: FaCoffee,
    iconRight: FaHeart,
  },
};
