import { InstructionsField, Typography } from "@snoring-dev/potion-ui";
import { Control } from "react-hook-form";
import { CustomSetValueFunction, PotionFormValues } from "./schema";
import { ListEntry } from "@snoring-dev/potion-ui/dist/src/components/List";
import { useCallback } from "react";

interface InstructionsTabProps {
  formControl: Control<PotionFormValues>;
  setValue: CustomSetValueFunction;
}

export const InstructionsTab: React.FC<InstructionsTabProps> = ({
  setValue,
}) => {
  const handleChange = useCallback(
    (newInstructions: ListEntry[]) => {
      const adaptedInstructions = newInstructions.map(
        (instruction) => instruction.label
      );
      setValue("instructions", adaptedInstructions);
    },
    [setValue]
  );

  return (
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
        onChange={handleChange}
      />
    </div>
  );
};
