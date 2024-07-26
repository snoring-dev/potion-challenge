import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./";
import { FaCoffee, FaLemon } from 'react-icons/fa';
import { LuSalad } from 'react-icons/lu';

const meta: Meta<typeof ListItem> = {
  title: "Atoms/ListItem",
  component: ListItem,
  argTypes: {
    index: { control: 'number' },
    label: { control: 'text' },
    useIcon: { control: 'boolean' },
    color: { control: 'color' },
    icon: {
      options: ['None', 'Coffee', 'Lemon', 'Salad'],
      mapping: {
        None: undefined,
        Coffee: FaCoffee,
        Lemon: FaLemon,
        Salad: LuSalad,
      },
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    componentSubtitle: "A single item in a list, can display a number or an icon",
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    index: 0,
    label: "This is a list item",
    useIcon: false,
    color: "#d05858",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    useIcon: true,
    icon: FaCoffee,
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    color: "#4a90e2",
  },
};

export const LongLabel: Story = {
  args: {
    ...Default.args,
    label: "This is a very long list item label that might wrap to multiple lines depending on the container width.",
  },
};

export const WithIconAndCustomColor: Story = {
  args: {
    ...WithIcon.args,
    color: "#2ecc71",
  },
};

const Template: Story = {
  render: (args) => (
    <ul className="space-y-4">
      <ListItem {...args} />
      <ListItem {...args} index={args.index + 1} />
      <ListItem {...args} index={args.index + 2} />
    </ul>
  ),
};
