import type { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from '.';

const meta: Meta<typeof BasicButton> = {
  title: 'Components/Button',
  component: BasicButton,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

export const Primary: Story = {
  args: {
    label: 'BasicButton',
  },
};