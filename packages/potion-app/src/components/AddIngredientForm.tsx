import { Button, InputField, TextField } from "potion-ui";

export const AddIngredientForm: React.FC = () => {
  return (
    <>
      <form className="w-[450px] space-y-4">
        <InputField
          label="Titre"
          description="Donner un nom unique à cet ingrédient"
          size="small"
        />
        <TextField
          label="Description"
          description="Décrivez votre nouvel ingrédient"
          size="large"
        />
        <div className="flex justify-end items-center pt-6">
          <Button label="Ajouter" variant="info" />
        </div>
      </form>
    </>
  );
};
