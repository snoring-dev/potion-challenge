import { InputField, Typography } from "potion-ui";
import { Control } from "react-hook-form";
import { CustomSetValueFunction, PotionFormValues } from "./schema";
import { useCallback, useState } from "react";
import { Metrics } from "../../types/Metrics";

interface PotionMetricsTabProps {
  formControl: Control<PotionFormValues>;
  setValue: CustomSetValueFunction;
}

const entries = [
  {
    title: "Puissance",
    description: "Indique la force ou l'intensité de l'effet de la potion.",
    name: "potency",
  },
  {
    title: "Durée",
    description: "Précise combien de temps les effets de la potion persistent.",
    name: "duration",
  },
  {
    title: "Difficulté",
    description: "Évalue la complexité de préparation de la potion.",
    name: "difficulty",
  },
  {
    title: "Effets secondaires",
    description: "Décrit les effets indésirables potentiels de la potion.",
    name: "sideEffects",
  },
];

export const PotionMetricsTab: React.FC<PotionMetricsTabProps> = ({
  setValue,
}) => {
  const [innerValues, setInnerValues] = useState<Metrics>({
    potency: "",
    duration: "",
    difficulty: "",
    sideEffects: "",
  });

  const onFieldValueChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const value = e.target.value;
        const name = e.target.name as keyof Metrics;
        const newObject = { ...innerValues, [name]: value };
        setInnerValues(newObject);
        setValue("metrics", newObject);
      },
      [innerValues, setValue]
    );

  return (
    <div className="p-2 sm:p-4">
      <Typography variant="h2" className="text-xl sm:text-2xl">
        Métriques de votre potion
      </Typography>
      <div className="w-full h-px bg-white-active my-2" />
      <div className="flex flex-col space-y-4">
        {entries.map(({ title, description, name }, index) => (
          <InputField
            key={index}
            name={name}
            size="small"
            label={title}
            description={description}
            onChange={onFieldValueChange}
            value={innerValues[name as keyof Metrics]}
          />
        ))}
      </div>
    </div>
  );
};
