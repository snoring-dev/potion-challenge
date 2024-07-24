import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./";

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      description: "The variant of the typography component",
    },
    children: {
      control: "text",
      description: "The content to be displayed",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
  parameters: {
    componentSubtitle:
      "A flexible component for displaying text with various styles",
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "p",
    children: `A magic potion is a fictional or mythical liquid substance often depicted in folklore, fairy tales, and fantasy literature. These potions are typically believed to have supernatural or magical properties, and when consumed or applied, they can bring about various effects, such as healing, transformation, invisibility, or enhanced abilities.`,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="p">Regular text: Main body text</Typography>
      <Typography variant="small">Small text: Secondary body text</Typography>
    </div>
  ),
};

export const ContentStructure: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">
        Magic potions for kids – ideas for magical ingredients
      </Typography>
      <Typography variant="p">
        When potion making with the kids you need to have some ideas of names
        for the ingredients. We went for a mixture of nice and gross sounding
        ingredients. Because my kids are gross, but magic is also nice! Here’s
        some of the things that we came up with and what their “real-world”
        equivalents are;
      </Typography>
      <Typography variant="h2">List of ingredients</Typography>
      <Typography variant="p">
        <ul>
          <li>Dragon scales – Small pieces of bark</li>
          <li>Fairy needles – pine needles</li>
          <li>Rabbit droppings – raisins</li>
          <li>
            Ground eye of newt – a mysterious spice at the back of the cupboard!
          </li>
          <li>Witches’ fingernails – pistachio shells</li>
          <li>Ground magical mountain rocks – flour</li>
          <li>Dried earwax – Toasted coconut</li>
          <li>Magical spring water – ordinary tap water</li>
          <li>Liquid lizard guts – green paint</li>
          <li>Dragon’s blood – red paint</li>
          <li>Liquid sun – yellow paint</li>
          <li>The light – white paint</li>
          <li>Liquid sky – blue paint</li>
          <li>Lavender, sage, rosemary – themselves</li>
          <li>Leaves – themselves</li>
        </ul>
      </Typography>
      <Typography variant="h3">Overall...</Typography>
      <Typography>
        You can literally use anything that you like when potion making with the
        kids, just make up some great names for the ingredients. Once we had
        everything assembled I just let them get on with it really. They had
        their cauldron (aka the bucket and bowls) set up and got mixing. I’d
        expected them to use a bit of paint. They used a ton of paint. More
        paint than water in the end, but they had such a good time I didn’t
        really mind. The clean up was less fun, but totally worth it.
      </Typography>
      <Typography variant="small">
        And no, it’s not always the prettiest of potions, but does that really
        matter?
      </Typography>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1" className="text-blue-600 underline">
        Custom Styled Heading
      </Typography>
      <Typography variant="p" className="text-green-700 italic">
        This body text has custom color and style.
      </Typography>
      <Typography variant="h3" className="text-red-500 uppercase">
        Attention Grabber
      </Typography>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography
        variant="h1"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Responsive Heading
      </Typography>
      <Typography
        variant="p"
        className="text-sm sm:text-base md:text-lg lg:text-xl"
      >
        This text changes size based on the screen width.
      </Typography>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="p" className="font-thin">
        Font Weight: Thin (200)
      </Typography>
      <Typography variant="p" className="font-extralight">
        Font Weight: Extra Light (300)
      </Typography>
      <Typography variant="p" className="font-light">
        Font Weight: Light (400)
      </Typography>
      <Typography variant="p" className="font-normal">
        Font Weight: Normal (500)
      </Typography>
      <Typography variant="p" className="font-medium">
        Font Weight: Medium (600)
      </Typography>
      <Typography variant="p" className="font-semibold">
        Font Weight: Semibold (700)
      </Typography>
      <Typography variant="p" className="font-bold">
        Font Weight: Bold (800)
      </Typography>
      <Typography variant="p" className="font-extrabold">
        Font Weight: Extra Bold (900)
      </Typography>
      <Typography variant="p" className="font-black">
        Font Weight: Black (1000)
      </Typography>
    </div>
  ),
};
