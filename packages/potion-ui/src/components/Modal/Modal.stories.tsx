import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./";
import { InputField } from "../InputField";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Modal component to handle in-app operation (show forms, extra details, ...)",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ResponsiveModalContent = () => (
  <div className="w-full max-w-[450px] space-y-4">
    <InputField label="Name" size="small" />
    <InputField label="Description" size="small" />
    <div className="flex justify-end items-center pt-6">
      <Button label="Submit" variant="info" />
    </div>
  </div>
);

export const Default: Story = {
  render: () => {
    return (
      <Modal title="Create a new potion">
        <ResponsiveModalContent />
      </Modal>
    );
  },
};

export const WithCustomTrigger: Story = {
  render: () => {
    return (
      <Modal
        title="Create a new potion"
        renderTrigger={(openAction) => (
          <Button
            label="Create Ingredient"
            onClick={openAction}
            variant="info"
            size="large"
            className="w-full sm:w-auto"
          />
        )}
      >
        <ResponsiveModalContent />
      </Modal>
    );
  },
};
