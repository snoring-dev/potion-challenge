import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InstructionsField } from "./";

const meta: Meta<typeof InstructionsField> = {
  title: "Molecules/InstructionsField",
  component: InstructionsField,
  argTypes: {
    onChange: { action: "instructions changed" },
  },
  parameters: {
    componentSubtitle: "A form component to create instructions",
  },
};

export default meta;
type Story = StoryObj<typeof InstructionsField>;

export const Default: Story = {
  args: {
    title: "Add new instruction",
    placeholder: "Please describe your prepration steps one by one",
    buttonLabel: "Add",
  },
  render: (args) => {
    return (
      <div>
        <InstructionsField
          {...args}
          onChange={(values) => console.log(values)}
        />
      </div>
    );
  },
};
