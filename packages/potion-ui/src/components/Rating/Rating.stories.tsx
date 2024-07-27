import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./";

const meta: Meta<typeof Rating> = {
  title: "Atoms/Rating",
  component: Rating,
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: 'The rating value (0-5)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  parameters: {
    componentSubtitle: "A star rating component",
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    rating: 3.5,
  },
};

export const FullStars: Story = {
  args: {
    rating: 5,
  },
};

export const NoStars: Story = {
  args: {
    rating: 0,
  },
};

export const HalfStar: Story = {
  args: {
    rating: 2.5,
  },
};

export const CustomColor: Story = {
  args: {
    rating: 4,
    className: "text-yellow-400",
  },
};

const Template: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Rating {...args} rating={1} />
      <Rating {...args} rating={2} />
      <Rating {...args} rating={3} />
      <Rating {...args} rating={4} />
      <Rating {...args} rating={5} />
    </div>
  ),
};

export const AllRatings: Story = {
  ...Template,
};

export const AllRatingsWithHalf: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Rating {...args} rating={0.5} />
      <Rating {...args} rating={1.5} />
      <Rating {...args} rating={2.5} />
      <Rating {...args} rating={3.5} />
      <Rating {...args} rating={4.5} />
    </div>
  ),
};