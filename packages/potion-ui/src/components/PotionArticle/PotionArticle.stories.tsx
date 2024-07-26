import { Meta, StoryObj } from "@storybook/react";
import { PotionArticle } from "./";
import { GiHealthPotion } from "react-icons/gi";

const meta: Meta<typeof PotionArticle> = {
  title: "Organisms/PotionArticle",
  component: PotionArticle,
  parameters: {
    componentSubtitle: "A full article about a potion",
  },
};

export default meta;
type Story = StoryObj<typeof PotionArticle>;

export const Default: Story = {
  args: {
    headerProps: {
      title: "Elixir Arcanum: The Quintessence of Alchemical Mastery",
      rating: 4.5,
      energyLevel: "Potent Resonance",
      date: "23 December, 2023",
    },
    imageUrl:
      "https://res.cloudinary.com/mjemmoudi/image/upload/v1722021541/pexels-rdne-7978821_bgqk59.jpg",
    imageAlt: "Elixir Arcanum in a crystal vial",
    metricsProps: {
      metrics: [
        { name: "Potentia", value: "Suprema" },
        { name: "Duratio", value: "II Horae" },
        { name: "Effectus Collaterales", value: "Minima" },
      ],
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.",
    ingredients: {
      items: [
        {
          label:
            "Aether crystallum in mortario contere donec pulvis subtilissimus fiat.",
          icon: GiHealthPotion,
        },
        {
          label:
            "Rorem lunae collige et cum pulvere aetherei misce in phiala argentea.",
          icon: GiHealthPotion,
        },
        {
          label: "Essentiam draconum adde, tria guttae sufficiunt.",
          icon: GiHealthPotion,
        },
        {
          label: "Sub luce stellarum, mixturam per noctem integram relinque.",
          icon: GiHealthPotion,
        },
        {
          label: "Aurora adveniente, elixirem in ampullam vitream transfunde.",
          icon: GiHealthPotion,
        },
      ],
    },
    instructions: {
      items: [
        {
          label: "Philtrum in umbra lunae plena bibendum est.",
        },
        {
          label: "Tres guttas sub lingua tene donec dissolvant.",
        },
        {
          label: "Oculos claude et mentem aperi ad visiones arcanas.",
        },
        {
          label: "Per horam medita, mysteria universi explorando.",
        },
        {
          label: "Lente ad mundum ordinarium redi, sapientiam novam servans.",
        },
      ],
    },
    extraDetails:
      "Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
  },
};
