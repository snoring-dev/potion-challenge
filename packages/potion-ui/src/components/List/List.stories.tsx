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

const recipeItems = [
  {
    label:
      "Juice the lemon and combine in a high-powered blender with the sun dried tomato mixture and garlic until smooth.",
    icon: FaLemon,
  },
  {
    label: "Pour over salad and toss together well.",
    icon: LuSalad,
  },
  {
    label: "Top with brazil nuts and enjoy!",
    icon: FaSeedling,
  },
];

export const Default: Story = {
  args: {
    title: "Recipe Instructions:",
    items: recipeItems,
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
    items: recipeItems,
  },
};

export const LongList: Story = {
  args: {
    title: "Study Plan:",
    items: [
      { label: "Review last week's notes", icon: FaBook },
      { label: "Complete practice problems", icon: FaPen },
      { label: "Watch online lecture", icon: FaCoffee },
      { label: "Summarize key points", icon: FaBook },
      { label: "Take a short break", icon: FaCoffee },
      { label: "Start working on assignment", icon: FaPen },
      { label: "Review difficult concepts", icon: FaBook },
      { label: "Prepare questions for next class", icon: FaPen },
    ],
    useIcons: true,
  },
};

export const SingleItem: Story = {
  args: {
    title: "Don't Forget:",
    items: [{ label: "Buy milk on the way home", icon: FaCoffee }],
    useIcons: true,
  },
};

export const WithLongText: Story = {
  args: {
    title: "Project Steps:",
    items: [
      {
        label:
          "Begin by thoroughly researching the topic, ensuring you have a comprehensive understanding of all relevant aspects. This may involve reading academic papers, books, and reputable online sources. Take detailed notes and organize your findings in a logical manner.",
        icon: FaBook,
      },
      {
        label:
          "Based on your research, develop a detailed project plan. This should include clear objectives, milestones, and deadlines. Consider potential challenges and plan for contingencies. Share this plan with your team or supervisor for feedback and approval.",
        icon: FaPen,
      },
    ],
    useIcons: true,
    variant: "elevated",
  },
};
