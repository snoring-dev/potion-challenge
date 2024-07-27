import { Meta, StoryObj } from "@storybook/react";
import { KeyValue } from "./";

const meta: Meta<typeof KeyValue> = {
  title: "Atoms/KeyValue",
  component: KeyValue,
  argTypes: {},
  parameters: {
    componentSubtitle: "A simple component for showing key value pairs",
  },
};

export default meta;
type Story = StoryObj<typeof KeyValue>;

export const Default: Story = {
  args: {
    theKey: 'Key',
    value: 'Value'
  }
};