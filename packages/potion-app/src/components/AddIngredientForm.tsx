import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, InputField, TextField } from "@snoring-dev/potion-ui";
import { useRef, useState } from "react";
import { createIngredient } from "../services/ingredient";

interface Props {
  onSuccess: () => void;
  onFailure?: () => void;
  closeModal?: () => void;
}

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  inventory: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Vous devez rentrer un chiffre!")
    .transform((val) => Number(val)),
});

type IngredientFormValues = z.infer<typeof formSchema>;

export const AddIngredientForm: React.FC<Props> = ({
  onSuccess,
  onFailure,
  closeModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IngredientFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "", inventory: 0 },
  });

  const onSubmit = async (data: IngredientFormValues) => {
    try {
      setIsLoading(true);
      await createIngredient({
        name: data.name,
        shortDescription: data.description,
        inventory: data.inventory,
      });
      reset();
      onSuccess();
      if (closeModal) closeModal();
    } catch (e) {
      console.error("Something went wrong");
      if (onFailure) onFailure();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        className="w-full xl:w-[450px] xl:m-auto space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputField
              id="name"
              label="Titre"
              description="Donner un nom unique à cet ingrédient"
              size="small"
              disabled={isLoading}
              {...field}
              errorMessage={errors.name ? "Donnez un nom correcte" : undefined}
            />
          )}
        />
        <Controller
          name="inventory"
          control={control}
          render={({ field }) => (
            <InputField
              id="inventory"
              label="Inventaire"
              type="number"
              description="Definir une quantité en stock"
              size="small"
              disabled={isLoading}
              {...field}
              errorMessage={
                errors.inventory ? "Donnez une quantité valide" : undefined
              }
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              id="description"
              size="small"
              className="min-h-28"
              disabled={isLoading}
              {...field}
              label="Description"
              description="Décrivez votre nouvel ingrédient"
              errorMessage={
                errors.description
                  ? "Donnez une description correcte"
                  : undefined
              }
            />
          )}
        />

        <div className="flex justify-end items-center pt-6">
          <Button
            className={isLoading ? "animate-pulse" : "animate-none"}
            label={isLoading ? "Chargement..." : "Soumettre"}
            variant="info"
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
    </>
  );
};
