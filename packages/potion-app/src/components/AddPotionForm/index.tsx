import React from "react";
import { TabComponent, Button } from "potion-ui";
import { TabItem } from "potion-ui/dist/src/components/TabComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PotionFormSchema, PotionFormValues } from "./schema";
import { GeneralInfoTab } from "./GeneralInfoTab";
import { IngredientTab } from "./IngredientTab";
import { InstructionsTab } from "./InstructionsTab";
import { PotionAttributesTab } from "./PotionAttributesTab";
import { initialValues } from "./values";
import { Ingredient as IngredientType } from "../../types/Ingredient";

interface AddPotionFormProps {
  ingredients: IngredientType[];
}

export const AddPotionForm: React.FC<AddPotionFormProps> = ({
  ingredients,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PotionFormValues>({
    resolver: zodResolver(PotionFormSchema),
    defaultValues: initialValues,
  });

  console.log("PotionForm: ERROR =>", errors);

  type FormNames = keyof PotionFormValues;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customSetValue = (id: FormNames, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = async (data: PotionFormValues) => {
    console.log("PotionForm =>", data);
  };

  const tabs: TabItem[] = [
    { name: "General", content: <GeneralInfoTab formControl={control} /> },
    {
      name: "Ingrédients",
      content: <IngredientTab setValue={customSetValue} data={ingredients} formControl={control} />,
    },
    { name: "Instructions", content: <InstructionsTab /> },
    { name: "Attributs Magique", content: <PotionAttributesTab /> },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabComponent
          tabs={tabs}
          className="w-full h-full"
          defaultIndex={1}
          tabListClassName="flex-wrap justify-center sm:justify-start"
          tabClassName="my-1 sm:my-0"
        />
        <Button variant="info" label="Sauvegarder" />
      </form>
    </div>
  );
};
