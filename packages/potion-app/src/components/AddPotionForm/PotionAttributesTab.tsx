import { InputField, Typography } from "potion-ui";

export const PotionAttributesTab: React.FC = () => (
  <div className="p-2 sm:p-4">
    <Typography variant="h2" className="text-xl sm:text-2xl">
      Informations générale
    </Typography>
    <div className="w-full h-px bg-white-active my-2" />
    <div className="flex flex-col space-y-4">
      {[
        "Puissance Arcanique",
        "Essence Éthérique",
        "Masse Matérielle",
        "Force Vitale",
        "Résidu Mystique",
        "Magie Pure",
        "Équilibre Élémentaire",
        "Résonance Spirituelle",
      ].map((attribute, index) => (
        <InputField
          key={index}
          size="small"
          label={attribute}
          description={`Description for ${attribute}`}
        />
      ))}
    </div>
  </div>
);
