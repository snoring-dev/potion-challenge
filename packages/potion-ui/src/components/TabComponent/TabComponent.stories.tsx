import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TabComponent, TabItem } from ".";
import { Typography } from "../Typography";
import { InputField } from "../InputField";
import { TextField } from "../TextField";
import { IngredientBox } from "../IngredientBox";
import { InstructionsField } from "../InstructionsField";

const meta: Meta<typeof TabComponent> = {
  title: "Molecules/TabComponent",
  component: TabComponent,
  argTypes: {},
  parameters: {
    componentSubtitle: "A form component to create new Potions based on Tabs",
  },
};

export default meta;
type Story = StoryObj<typeof TabComponent>;

const GeneralInfoTab = () => (
  <div className="p-4">
    <Typography variant="h2">Informations générale</Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-col space-y-4">
      <InputField
        size="small"
        label="Titre"
        description="Donnez un super nom à votre potion magique"
      />
      <InputField
        size="small"
        label="Image mignature"
        description="Image à la une pour attirer les attentions (1:1)"
      />
      <InputField
        size="small"
        label="Image principale"
        description="Lien vers une image large (16:9)"
      />
      <TextField
        size="small"
        label="description"
        description="une petite description de la potion"
      />
      <TextField
        size="small"
        label="Détails"
        description="Détails supplementaires à propos de la potion"
      />
    </div>
  </div>
);

const IngredientTab = () => (
  <div className="p-4">
    <Typography variant="h2">List des ingrédients</Typography>
    <Typography variant="small">
      Veuillez choisir les ingrédients qui compose votre potion
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-wrap gap-2">
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
      <IngredientBox
        title="Dragon's Breath"
        description="Fiery essence of a dragon"
      />
    </div>
  </div>
);

const InstructionsTab = () => (
  <div className="p-4">
    <Typography variant="h2">List des instructions</Typography>
    <Typography variant="small">
      Veuillez spécifier les étapes de préparation
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <InstructionsField
      title="Nouvelle instruction"
      placeholder="Donner une nouvelle étape"
      buttonLabel="Ajouter"
      onChange={(values) => console.log("Instructions:", values)}
    />
  </div>
);

const PotionAttributesTab = () => (
  <div className="p-4">
    <Typography variant="h2">Informations générale</Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-col space-y-4">
      <InputField
        size="small"
        label="Puissance Arcanique"
        description="Mesure la force brute des énergies magiques contenues dans la potion."
      />
      <InputField
        size="small"
        label="Essence Éthérique"
        description="Indique la concentration en substances mystiques immatérielles."
      />
      <InputField
        size="small"
        label="Masse Matérielle"
        description="Représente la densité physique et la stabilité de la concoction."
      />
      <InputField
        size="small"
        label="Force Vitale"
        description="Évalue l'impact de la potion sur l'énergie vitale du consommateur."
      />
      <InputField
        size="small"
        label="Résidu Mystique"
        description="Quantifie les traces magiques laissées après l'utilisation de la potion."
      />
      <InputField
        size="small"
        label="Magie Pure"
        description="Indique le degré de raffinement et de pureté des énergies magiques."
      />
      <InputField
        size="small"
        label="Équilibre Élémentaire"
        description="Décrit la dominance ou l'harmonie des éléments naturels dans la mixture."
      />
      <InputField
        size="small"
        label="Résonance Spirituelle"
        description="Mesure la capacité de la potion à interagir avec l'esprit et l'âme."
      />
    </div>
  </div>
);

const tabs: TabItem[] = [
  { name: "General", content: <GeneralInfoTab /> },
  { name: "Ingrédients", content: <IngredientTab /> },
  { name: "Instructions", content: <InstructionsTab /> },
  { name: "Attributs Magique", content: <PotionAttributesTab /> },
];

export const Default: Story = {
  args: {
    tabs: tabs,
    className: "w-full max-w-3xl",
    defaultIndex: 3,
  },
};
