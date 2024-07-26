import { Meta, StoryObj } from "@storybook/react";
import { List } from "./";
import { FaLemon, FaSeedling, FaCoffee, FaBook, FaPen } from "react-icons/fa";
import { LuSalad } from "react-icons/lu";

const meta: Meta<typeof List> = {
  title: "Molecules/List",
  component: List,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
    },
    color: {
      control: "color",
    },
    useIcons: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
  },
  parameters: {
    componentSubtitle: "A component for showing a list of instructions",
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const loremItems = [
  {
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: FaLemon,
  },
  {
    label: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: LuSalad,
  },
  {
    label:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    icon: FaSeedling,
  },
];

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Instructions:",
    items: loremItems,
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    useIcons: true,
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Elevated: Story = {
  args: {
    ...Default.args,
    variant: "elevated",
  },
};

export const WithoutTitle: Story = {
  args: {
    items: loremItems,
  },
};

export const LongList: Story = {
  args: {
    title: "Lorem Ipsum Plan:",
    items: [
      { label: "Duis aute irure dolor in reprehenderit", icon: FaBook },
      { label: "Excepteur sint occaecat cupidatat non proident", icon: FaPen },
      { label: "Sunt in culpa qui officia deserunt mollit", icon: FaCoffee },
      { label: "Sed ut perspiciatis unde omnis iste natus", icon: FaBook },
      { label: "Nemo enim ipsam voluptatem quia voluptas", icon: FaCoffee },
      { label: "Neque porro quisquam est, qui dolorem ipsum", icon: FaPen },
      { label: "Quis autem vel eum iure reprehenderit qui", icon: FaBook },
      {
        label: "At vero eos et accusamus et iusto odio dignissimos",
        icon: FaPen,
      },
    ],
    useIcons: true,
  },
};

export const SingleItem: Story = {
  args: {
    title: "Memento:",
    items: [
      { label: "Carpe diem, quam minimum credula postero", icon: FaCoffee },
    ],
    useIcons: true,
  },
};

export const WithLongText: Story = {
  args: {
    title: "Lorem Ipsum Steps:",
    items: [
      {
        label:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        icon: FaBook,
      },
      {
        label:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        icon: FaPen,
      },
    ],
    useIcons: true,
    variant: "elevated",
  },
};
