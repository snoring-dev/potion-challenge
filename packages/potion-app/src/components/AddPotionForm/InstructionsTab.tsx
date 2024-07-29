import { InstructionsField, Typography } from "potion-ui";

export const InstructionsTab: React.FC = () => (
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
      onChange={(values) => console.log("Instructions:", values)}
    />
  </div>
);
