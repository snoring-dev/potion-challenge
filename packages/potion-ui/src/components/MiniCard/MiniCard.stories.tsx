import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MiniCard } from "./";

const meta: Meta<typeof MiniCard> = {
  title: "Molecules/MiniCard",
  component: MiniCard,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
    },
    size: {
      control: "select",
      options: ["default", "small"],
    },
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    imageAlt: { control: "text" },
    rating: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
    energyLevel: { control: "text" },
  },
  parameters: {
    componentSubtitle: "A compact card displaying potion information",
  },
};

export default meta;
type Story = StoryObj<typeof MiniCard>;

export const Default: Story = {
  args: {
    title: "Clairvoyance Elixir",
    description:
      "Violet potion with silver swirls that glows faintly. Grants enhanced perception and future glimpses. Mystical Energy: Resonant Pulse. Suitable for experienced users. Tastes of starlight and dreams, leaves long-lasting tingle.",
    imageUrl:
      "https://res.cloudinary.com/mjemmoudi/image/upload/v1721970213/ai-generated-8623680_1280_mspljj.png",
    imageAlt: "Clairvoyance Elixir",
    rating: 4.5,
    energyLevel: "Dormant Whisper",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Elevated: Story = {
  args: {
    ...Default.args,
    variant: "elevated",
  },
};

export const SmallOutlined: Story = {
  args: {
    ...Default.args,
    size: "small",
    variant: "outlined",
  },
};

export const LowRating: Story = {
  args: {
    ...Default.args,
    rating: 2,
    title: "Novice's Brew",
    energyLevel: "Gentle Ripple",
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title:
      "Ultra Rare Legendary Potion of Supreme Enlightenment and Cosmic Understanding",
  },
};

export const ShortDescription: Story = {
  args: {
    ...Default.args,
    description: "A simple potion for beginners.",
  },
};

const Template: Story = {
  render: (args) => (
    <div className="space-y-4">
      <MiniCard {...args} />
      <div className="bg-white-active h-[1px] my-1"></div>
      <MiniCard {...args} title="Another Potion" rating={3} />
      <div className="bg-white-active h-[1px] my-1"></div>
      <MiniCard {...args} title="Yet Another Potion" rating={5} />
    </div>
  ),
};

export const MultipleCards: Story = {
  ...Template,
  args: {
    ...Default.args,
  },
};

export const MultipleSmallCards: Story = {
  ...Template,
  args: {
    ...Default.args,
    size: "small",
  },
};
