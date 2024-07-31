import React, { useRef, useState } from "react";
import { TabComponent, Button, Alert, Typography } from "@snoring-dev/potion-ui";
import { TabItem } from "@snoring-dev/potion-ui/dist/src/components/TabComponent";
import { useForm } from "react-hook-form";
import { PotionFormSchema, PotionFormValues } from "./schema";
import { GeneralInfoTab } from "./GeneralInfoTab";
import { IngredientTab } from "./IngredientTab";
import { InstructionsTab } from "./InstructionsTab";
import { PotionAttributesTab } from "./PotionAttributesTab";
import { initialValues } from "./values";
import { Ingredient as IngredientType } from "../../types/Ingredient";
import { randomIntBetween } from "../../utils";
import { KeywordsTab } from "./KeywordsTab";
import { PotionMetricsTab } from "./PotionMetricsTab";
import { savePotion } from "../../services/potion";
import { useNavigate } from "@tanstack/react-router";
import { BiSolidErrorCircle } from "react-icons/bi";

interface AddPotionFormProps {
  ingredients: IngredientType[];
}

export const AddPotionForm: React.FC<AddPotionFormProps> = ({
  ingredients,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const { handleSubmit, control, reset, setValue } = useForm<PotionFormValues>({
    defaultValues: initialValues,
  });

  type FormNames = keyof PotionFormValues;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customSetValue = (id: FormNames, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = async (formData: PotionFormValues) => {
    const values = {
      ...formData,
      creationDate: new Date().toISOString(),
      rating: randomIntBetween(4, 5),
    };

    const result = PotionFormSchema.safeParse(values);

    if (result.success) {
      try {
        setIsLoading(true);
        const newPotion = await savePotion(result.data);
        reset();
        navigate({ to: `/potion/${newPotion.id}`, hash: "", search: "" });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Validation failed:");
      const errorMessages: string[] = [];
      result.error.issues.forEach((issue) => {
        errorMessages.push(issue.message);
        console.error(
          `Field: ${issue.path.join(".")}, Error: ${issue.message}`
        );
      });
      setErrors([...errorMessages]);
    }
  };

  const tabs: TabItem[] = [
    { name: "General", content: <GeneralInfoTab formControl={control} /> },
    {
      name: "Ingrédients",
      content: (
        <IngredientTab
          setValue={customSetValue}
          data={ingredients}
          formControl={control}
        />
      ),
    },
    {
      name: "Instructions",
      content: (
        <InstructionsTab setValue={customSetValue} formControl={control} />
      ),
    },
    {
      name: "Attributs Magique",
      content: (
        <PotionAttributesTab setValue={customSetValue} formControl={control} />
      ),
    },
    {
      name: "Métriques",
      content: (
        <PotionMetricsTab setValue={customSetValue} formControl={control} />
      ),
    },
    {
      name: "Mots clés",
      content: <KeywordsTab setValue={customSetValue} formControl={control} />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      {errors.length > 0 && (
        <Alert
          title="Vous devez corriger des erreurs"
          variant="error"
          className="mb-4"
          description={
            <ul className="space-y-1 list-inside mt-3">
              {errors.map((issue, index) => (
                <li key={index} className="flex items-center justify-start">
                  <BiSolidErrorCircle className="relative -top-px" />
                  <Typography variant="small" className="pl-2">
                    {issue}
                  </Typography>
                </li>
              ))}
            </ul>
          }
          richText
        />
      )}
      <form ref={formRef} onSubmit={(e) => { e.preventDefault()}}>
        <div className="mb-4">
          <TabComponent
            tabs={tabs}
            className="w-full h-full"
            defaultIndex={0}
            tabListClassName="flex-wrap justify-center sm:justify-start"
            tabClassName="my-1 sm:my-0"
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="info"
            className={isLoading ? "animate-pulse" : "animate-none"}
            label={isLoading ? "Chargement..." : "Sauvegarder"}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};
