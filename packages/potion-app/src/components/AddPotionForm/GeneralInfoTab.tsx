import { InputField, TextField, Typography } from "@snoring-dev/potion-ui";
import { Control, Controller } from "react-hook-form";
import { PotionFormValues } from "./schema";

interface Props {
  formControl: Control<PotionFormValues>;
}

export const GeneralInfoTab: React.FC<Props> = ({ formControl }) => (
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      Informations générale
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-col space-y-4">
      <Controller
        name="title"
        control={formControl}
        render={({ field }) => (
          <InputField
            size="small"
            label="Titre"
            description="Donnez un super nom à votre potion magique"
            {...field}
          />
        )}
      />
      <Controller
        name="thumbnailUrl"
        control={formControl}
        render={({ field }) => (
          <InputField
            size="small"
            label="Image mignature"
            description="Image à la une pour attirer les attentions (1:1)"
            {...field}
          />
        )}
      />
      <Controller
        name="mainImageUrl"
        control={formControl}
        render={({ field }) => (
          <InputField
            size="small"
            label="Image principale"
            description="Lien vers une image large (16:9)"
            {...field}
          />
        )}
      />
      <Controller
        name="description"
        control={formControl}
        render={({ field }) => (
          <TextField
            size="small"
            label="description"
            description="une petite description de la potion"
            {...field}
          />
        )}
      />
      <Controller
        name="details"
        control={formControl}
        render={({ field }) => (
          <TextField
            size="small"
            label="Détails"
            description="Détails supplementaires à propos de la potion"
            {...field}
          />
        )}
      />
    </div>
  </div>
);
