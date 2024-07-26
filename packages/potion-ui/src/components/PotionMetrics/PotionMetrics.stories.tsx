import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { PotionMetrics } from "./";

const meta: Meta<typeof PotionMetrics> = {
  title: "Molecules/PotionMetrics",
  component: PotionMetrics,
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: 'select',
      options: ['default', 'compact', 'wide'],
    },
    metrics: {
      control: 'object',
    },
  },
  parameters: {
    componentSubtitle: "Display metrics for potions",
  },
};

export default meta;
type Story = StoryObj<typeof PotionMetrics>;

const defaultMetrics = [
  { name: "Potency", value: "High" },
  { name: "Duration", value: "2 hours" },
  { name: "Side Effects", value: "Minimal" },
];

export const Default: Story = {
  args: {
    metrics: defaultMetrics,
  },
};

export const Vertical: Story = {
  args: {
    metrics: defaultMetrics,
    layout: 'vertical',
  },
};

export const CompactSpacing: Story = {
  args: {
    metrics: defaultMetrics,
    spacing: 'compact',
  },
};

export const WideSpacing: Story = {
  args: {
    metrics: defaultMetrics,
    spacing: 'wide',
  },
};

export const ManyMetrics: Story = {
  args: {
    metrics: [
      ...defaultMetrics,
      { name: "Ingredients", value: 7 },
      { name: "Difficulty", value: "Advanced" },
    ],
  },
};

export const SingleMetric: Story = {
  args: {
    metrics: [{ name: "Rarity", value: "Legendary" }],
  },
};

const Template: Story = {
  render: (args) => (
    <div className="space-y-8">
      <PotionMetrics {...args} />
      <PotionMetrics {...args} layout="vertical" />
    </div>
  ),
};

export const HorizontalAndVertical: Story = {
  ...Template,
  args: {
    metrics: defaultMetrics,
  },
};