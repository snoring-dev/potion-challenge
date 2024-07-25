import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "The visual style of the alert",
    },
    title: { control: "text" },
    description: { control: "text" },
    icon: {
      control: "select",
      options: ["success", "error", "warning", "info", "none"],
      mapping: {
        success: FaCheckCircle,
        error: FaExclamationCircle,
        warning: FaExclamationTriangle,
        info: FaInfoCircle,
        none: undefined,
      },
    },
    primaryAction: { control: "object" },
    secondaryAction: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success message",
    description: "This is a success message. Everything worked as expected.",
    icon: FaCheckCircle,
    primaryAction: {
      label: "Continue",
      onClick: () => console.log("Primary action clicked"),
    },
    secondaryAction: {
      label: "Cancel",
      onClick: () => console.log("Secondary action clicked"),
    },
  },
};

export const Error: Story = {
  args: {
    ...Success.args,
    variant: "error",
    title: "Error message",
    description: "An error occurred. Please try again later.",
    icon: FaExclamationCircle,
  },
};

export const Warning: Story = {
  args: {
    ...Success.args,
    variant: "warning",
    title: "Warning message",
    description: "This action might have unexpected consequences.",
    icon: FaExclamationTriangle,
  },
};

export const Info: Story = {
  args: {
    ...Success.args,
    variant: "info",
    title: "Information message",
    description: "Here's some information you might find useful.",
    icon: FaInfoCircle,
  },
};

export const WithoutIcon: Story = {
  args: {
    ...Success.args,
    icon: undefined,
  },
};

export const WithoutActions: Story = {
  args: {
    ...Success.args,
    primaryAction: undefined,
    secondaryAction: undefined,
  },
};

export const LongDescription: Story = {
  args: {
    ...Success.args,
    description:
      "This is a very long description that demonstrates how the Alert component handles larger amounts of text. It might wrap to multiple lines depending on the width of the container. The Alert should expand vertically to accommodate all of this text while maintaining its layout and style.",
  },
};

export const WithRichTextDescription: Story = {
  args: {
    ...Success.args,
    description: (
      <>
        This description contains <strong>rich text</strong>. You can include{" "}
        <a href="#" className="underline">
          links
        </a>{" "}
        and other HTML elements. Use this feature when you need to emphasize
        certain parts of your message or provide interactive elements within the
        alert.
      </>
    ),
  },
};
