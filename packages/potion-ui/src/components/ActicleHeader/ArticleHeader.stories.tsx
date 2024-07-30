import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ArticleHeader } from "./";

const meta: Meta<typeof ArticleHeader> = {
  title: "Molecules/ArticleHeader",
  component: ArticleHeader,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact", "expanded"],
    },
    title: { control: "text" },
    date: { control: "text" },
    energyLevel: { control: "text" },
    rating: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
  },
  parameters: {
    componentSubtitle: "Header component for articles or blog posts",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleHeader>;

export const Default: Story = {
  args: {
    title: "The Art of Potion Making",
    date: "27 November 2023",
    energyLevel: "High Intensity",
    rating: 4.5,
  },
};

export const SmallDevices: Story = {
  args: {
    ...Default.args,
    variant: "compact",
    isMobile: true,
  },
};

export const Expanded: Story = {
  args: {
    ...Default.args,
    variant: "expanded",
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title:
      "The Comprehensive Guide to Advanced Alchemical Techniques and Their Applications in Modern Magical Practice",
  },
};

export const LowRating: Story = {
  args: {
    ...Default.args,
    rating: 2,
    energyLevel: "Low Intensity",
  },
};
