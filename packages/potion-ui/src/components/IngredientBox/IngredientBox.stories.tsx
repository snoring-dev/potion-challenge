import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IngredientBox } from "./";

const meta: Meta<typeof IngredientBox> = {
  title: "Molecules/IngredientBox",
  component: IngredientBox,
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof IngredientBox>;

export const Default: Story = {
  render: () => {
    return (
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
        onChange={(checked) => console.log("checked", checked)}
      />
    );
  },
};
