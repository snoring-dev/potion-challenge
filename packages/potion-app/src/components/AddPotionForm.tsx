import React from "react";
import {
  IngredientBox,
  InputField,
  InstructionsField,
  TextField,
  Typography,
  TabComponent,
} from "potion-ui";
import { TabItem } from "potion-ui/dist/src/components/TabComponent";

const GeneralInfoTab = () => (
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      Informations générale
    </Typography>
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
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      List des ingrédients
    </Typography>
    <Typography variant="small">
      Veuillez choisir les ingrédients qui compose votre potion
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-wrap gap-2">
      {[...Array(6)].map((_, index) => (
        <IngredientBox
          key={index}
          title="Dragon's Breath"
          description="Fiery essence of a dragon"
        />
      ))}
    </div>
  </div>
);

const InstructionsTab = () => (
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      List des instructions
    </Typography>
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
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      Informations générale
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-col space-y-4">
      {[
        "Puissance Arcanique",
        "Essence Éthérique",
        "Masse Matérielle",
        "Force Vitale",
        "Résidu Mystique",
        "Magie Pure",
        "Équilibre Élémentaire",
        "Résonance Spirituelle",
      ].map((attribute, index) => (
        <InputField
          key={index}
          size="small"
          label={attribute}
          description={`Description for ${attribute}`}
        />
      ))}
    </div>
  </div>
);

const tabs: TabItem[] = [
  { name: "General", content: <GeneralInfoTab /> },
  { name: "Ingrédients", content: <IngredientTab /> },
  { name: "Instructions", content: <InstructionsTab /> },
  { name: "Attributs Magique", content: <PotionAttributesTab /> },
];

export const AddPotionForm: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <TabComponent
        tabs={tabs}
        className="w-full h-full"
        defaultIndex={0}
        tabListClassName="flex-wrap justify-center sm:justify-start"
        tabClassName="my-1 sm:my-0"
      />
    </div>
  );
};
