import { z } from "zod";

const IngredientSchema = z.object({
  id: z.string({ message: "Vous devez choisir au moin un ingrédient" }),
  quantity: z.number().int().positive(),
});

const MetricsSchema = z.object({
  potency: z.string({ message: "La puissance est requise" }),
  duration: z.string({ message: "La durée est requise" }),
  difficulty: z.string({ message: "La difficulté est requise" }),
  sideEffects: z.string({ message: "Les effets secondaires sont requis" }),
});

const MagicalBrewStatsSchema = z.object({
  arcanePotency: z.string({ message: "La puissance arcanique est requise" }),
  etherealEssence: z.string({ message: "L'essence éthérique est requise" }),
  corporealMass: z.string({ message: "La masse corporelle est requise" }),
  vitalForce: z.string({ message: "La force vitale est requise" }),
  mysticalResidue: z.string({ message: "Le résidu mystique est requis" }),
  pureMagic: z.string({ message: "La magie pure est requise" }),
  elementalBalance: z.string({ message: "L'équilibre élémentaire est requis" }),
  spiritResonance: z.string({
    message: "La résonance spirituelle est requise",
  }),
});

export const PotionFormSchema = z.object({
  title: z.string({ message: "Le titre est requis" }),
  creationDate: z.string().datetime(),
  rating: z.number().min(0).max(5),
  description: z.string({ message: "La description est requise" }),
  details: z.string({ message: "Les détails sont requis" }),
  thumbnailUrl: z
    .string({ message: "La vignette est requise" })
    .url("L'URL de la vignette doit être une URL valide"),
  mainImageUrl: z
    .string({ message: "L'image principale' est requise" })
    .url("L'URL de l'image principale doit être une URL valide"),
  metrics: MetricsSchema,
  magicalBrewStats: MagicalBrewStatsSchema,
  instructions: z.array(z.string()),
  tags: z.array(z.string()),
  ingredients: z.array(IngredientSchema),
});

export type PotionFormValues = z.infer<typeof PotionFormSchema>;

export type FormNames = keyof PotionFormValues;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomSetValueFunction = (id: FormNames, value: any) => void;
