import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    pictureUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'array' },
    primaryAction: { control: 'object' },
    secondaryAction: { control: 'object' },
  },
  parameters: {
    componentSubtitle: "A flexible component for displaying potions",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Template: Story = {
  render: (args) => (
    <div className="flex items-center justify-center w-full h-screen">
      <Card {...args} />
    </div>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    pictureUrl: "https://res.cloudinary.com/mjemmoudi/image/upload/v1721970213/ai-generated-8594827_1920_lpr94n.png",
    title: "Potion de Clairvoyance",
    description: "Cette mixture mystique combine l'épine protectrice du hérisson, le jus hallucinogène du Horglup et l'essence exotique de la noix de coco. Une gorgée de cet élixir doré ouvre le troisième œil, permettant au buveur de percevoir des vérités cachées et d'entrevoir l'avenir pendant une brève mais intense période.",
    tags: ["#Divination", "#VisionFuture", "#PerceptionExtrasensorielle", "#TroisièmeŒil"],
    primaryAction: { label: "Learn more", onClick: () => {} },
  },
};

export const WithoutImage: Story = {
  ...Template,
  args: {
    title: "Potion d'Invisibilité",
    description: "Cette potion incolore et inodore rend son utilisateur complètement invisible pendant une courte durée. Parfaite pour les escapades secrètes ou les missions d'espionnage.",
    tags: ["#Invisibilité", "#Espionnage", "#Furtivité"],
    primaryAction: { label: "Acheter", onClick: () => {} },
    secondaryAction: { label: "En savoir plus", onClick: () => {} },
  },
};

export const WithoutDescription: Story = {
  ...Template,
  args: {
    pictureUrl: "https://res.cloudinary.com/mjemmoudi/image/upload/v1721970213/ai-generated-8594827_1920_lpr94n.png",
    title: "Élixir de Force",
    tags: ["#Force", "#Puissance", "#Endurance"],
    primaryAction: { label: "Essayer", onClick: () => {} },
  },
};

export const WithoutTags: Story = {
  ...Template,
  args: {
    pictureUrl: "https://res.cloudinary.com/mjemmoudi/image/upload/v1721970213/ai-generated-8594827_1920_lpr94n.png",
    title: "Philtre d'Amour",
    description: "Un breuvage délicat aux effets puissants, capable de susciter une forte attraction chez celui qui le boit. À utiliser avec précaution et éthique.",
    primaryAction: { label: "Commander", onClick: () => {} },
    secondaryAction: { label: "Lire les avertissements", onClick: () => {} },
  },
};

export const OnlyTitle: Story = {
  ...Template,
  args: {
    title: "Potion Mystérieuse",
    primaryAction: { label: "Découvrir", onClick: () => {} },
  },
};

export const LongContent: Story = {
  ...Template,
  args: {
    pictureUrl: "https://res.cloudinary.com/mjemmoudi/image/upload/v1721970213/ai-generated-8594827_1920_lpr94n.png",
    title: "Élixir de Sagesse Millénaire",
    description: "Cet élixir ancien, transmis à travers les âges par les plus grands sages, contient la quintessence de la connaissance humaine. Chaque gorgée offre un aperçu des mystères de l'univers, de la nature de la réalité et des secrets de l'existence. Les effets peuvent varier d'une simple illumination à une profonde transformation de la conscience. À consommer avec respect et ouverture d'esprit.",
    tags: ["#Sagesse", "#Connaissance", "#Illumination", "#Conscience", "#Transformation", "#Mystères", "#Univers", "#Réalité", "#Existence", "#Philosophie"],
    primaryAction: { label: "Méditer", onClick: () => {} },
    secondaryAction: { label: "Consulter un sage", onClick: () => {} },
  },
};