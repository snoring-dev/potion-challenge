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
  title: "Molecules/Alert",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: FaExclamationCircle,
  },
};

export const Warning: Story = {
  args: {
    ...Success.args,
    variant: "warning",
    title: "Warning message",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: FaExclamationTriangle,
  },
};

export const Info: Story = {
  args: {
    ...Success.args,
    variant: "info",
    title: "Information message",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

export const WithRichTextDescription: Story = {
  args: {
    ...Success.args,
    description: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>
        . Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.{" "}
        <a href="#" className="underline">
          Duis aute irure dolor
        </a>{" "}
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </>
    ),
  },
};
