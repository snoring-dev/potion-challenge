import { InstructionsField, Typography } from "@snoring-dev/potion-ui";
import { Control } from "react-hook-form";
import { CustomSetValueFunction, PotionFormValues } from "./schema";
import { ListEntry } from "@snoring-dev/potion-ui/dist/src/components/List";
import { useCallback } from "react";

interface KeywordsTabProps {
  formControl: Control<PotionFormValues>;
  setValue: CustomSetValueFunction;
}

export const KeywordsTab: React.FC<KeywordsTabProps> = ({ setValue }) => {
  const handleChange = useCallback(
    (newInstructions: ListEntry[]) => {
      const adaptedInstructions = newInstructions.map(
        (instruction) => instruction.label
      );
      setValue("tags", adaptedInstructions);
    },
    [setValue]
  );

  return (
    <div className="p-2 sm:p-4">
      <Typography variant="h2" className="text-xl sm:text-2xl">
        List des mots clés
      </Typography>
      <Typography variant="small">
        Veuillez ajouter des mots clés liés à votre potion magique
      </Typography>
      <div className="w-full h-px bg-white-active my-2" />
      <InstructionsField
        title="Nouveau mot clé"
        buttonLabel="Ajouter"
        onChange={handleChange}
      />
    </div>
  );
};
