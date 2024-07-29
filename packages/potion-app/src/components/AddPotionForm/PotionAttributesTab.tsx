import { InputField, Typography } from "potion-ui";
import { Control } from "react-hook-form";
import { CustomSetValueFunction, PotionFormValues } from "./schema";
import { useCallback, useState } from "react";
import { MagicalBrewStats } from "../../types/MagicalBrewStats";

interface PotionAttributesTabProps {
  formControl: Control<PotionFormValues>;
  setValue: CustomSetValueFunction;
}

const entries = [
  {
    title: "Puissance Arcanique",
    description:
      "Mesure la force brute des énergies magiques contenues dans la potion.",
    name: "arcanePotency",
  },
  {
    title: "Essence Éthérique",
    description:
      "Indique la concentration en substances mystiques immatérielles.",
    name: "etherealEssence",
  },
  {
    title: "Masse Matérielle",
    description:
      "Représente la densité physique et la stabilité de la concoction.",
    name: "corporealMass",
  },
  {
    title: "Force Vitale",
    description:
      "Évalue l'impact de la potion sur l'énergie vitale du consommateur.",
    name: "vitalForce",
  },
  {
    title: "Résidu Mystique",
    description:
      "Quantifie les traces magiques laissées après l'utilisation de la potion.",
    name: "mysticalResidue",
  },
  {
    title: "Magie Pure",
    description:
      "Indique le degré de raffinement et de pureté des énergies magiques.",
    name: "pureMagic",
  },
  {
    title: "Équilibre Élémentaire",
    description:
      "Décrit la dominance ou l'harmonie des éléments naturels dans la mixture.",
    name: "elementalBalance",
  },
  {
    title: "Résonance Spirituelle",
    description:
      "Mesure la capacité de la potion à interagir avec l'esprit et l'âme.",
    name: "spiritResonance",
  },
];

export const PotionAttributesTab: React.FC<PotionAttributesTabProps> = ({
  setValue,
}) => {
  const [innerValues, setInnerValues] = useState<MagicalBrewStats>({
    arcanePotency: "",
    corporealMass: "",
    elementalBalance: "",
    etherealEssence: "",
    mysticalResidue: "",
    pureMagic: "",
    spiritResonance: "",
    vitalForce: "",
  });

  const onFieldValueChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newObject = { ...innerValues, [name]: value };
        setInnerValues(newObject);
        setValue("magicalBrewStats", newObject);
      },
      [innerValues, setValue]
    );

  return (
    <div className="p-2 sm:p-4">
      <Typography variant="h2" className="text-xl sm:text-2xl">
        Attributs magique de votre potion
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
          />
        ))}
      </div>
    </div>
  );
};
