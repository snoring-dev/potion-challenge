import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AttributeList } from "./";

const meta: Meta<typeof AttributeList> = {
  title: "Molecules/AttributeList",
  component: AttributeList,
  argTypes: {},
  parameters: {
    componentSubtitle: "A flexible component for displaying potion's attributes",
  },
};

export default meta;
type Story = StoryObj<typeof AttributeList>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center w-full h-screen">
      <AttributeList title="Magical Brew Stats" values={[
        { key: "Arcane Potency", value: "494"},
        { key: "Ethereal Essence", value: "80g"},
        { key: "Corporeal Mass", value: "18g"},
        { key: "Vital Force", value: "24g"},
        { key: "Mystical Residue", value: "23g"},
        { key: "Pure Magic", value: "56g"},
        { key: "Elemental Balance", value: "444mg"},
        { key: "Spirit Resonance", value: "0mg"},
      ]}/>
    </div>
  ),
};