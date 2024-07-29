/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IngredientBox, Typography } from "potion-ui";
import { Control, useWatch } from "react-hook-form";
import { CustomSetValueFunction, PotionFormValues } from "./schema";
import { Ingredient as IngredientType } from "../../types/Ingredient";
import { randomIntBetween } from "../../utils";

interface IngredientTabProps {
  formControl: Control<PotionFormValues>;
  data: IngredientType[];
  setValue: CustomSetValueFunction;
}

export const IngredientTab: React.FC<IngredientTabProps> = ({
  formControl,
  data,
  setValue,
}) => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    { id: string; quantity: number }[]
  >([]);

  const watchedIngredients = useWatch({
    control: formControl,
    name: "ingredients",
  });

  return (
    <div className="p-2 sm:p-4">
      <Typography variant="h2" className="text-xl sm:text-2xl">
        Liste des ingrédients
      </Typography>
      <Typography variant="small">
        Veuillez choisir les ingrédients qui composent votre potion
      </Typography>
      <div className="w-full h-px bg-white-active my-2" />
      <div className="flex flex-wrap gap-2">
        {data.map((ingredient) => {
          const isSelected = watchedIngredients?.some(
            (item) => item?.id === ingredient.id
          );

          return (
            <IngredientBox
              key={ingredient.id}
              id={ingredient.id}
              title={ingredient.name}
              description={ingredient.shortDescription}
              onChange={(checked, ingredientId) => {
                const ing = data.find((i) => i.id === ingredientId);

                if (!ing) return;

                if (checked) {
                  const newData = [
                    ...selectedIngredients,
                    { id: ing.id, quantity: randomIntBetween(1, 50) },
                  ];
                  setSelectedIngredients(newData);
                  setValue("ingredients", newData);
                } else {
                  const removeIng = selectedIngredients.filter(
                    (item) => item.id !== ing.id
                  );
                  setSelectedIngredients([...removeIng]);
                  setValue("ingredients", [...removeIng]);
                }
              }}
              checked={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
};
