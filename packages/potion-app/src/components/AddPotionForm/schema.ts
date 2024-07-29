import { z } from "zod";

const IngredientSchema = z
  .object({
    id: z.string().optional(),
    quantity: z
      .number()
      .int()
      .positive("La quantité doit être un nombre entier positif")
      .optional(),
  })
  .optional();

const MetricsSchema = z
  .object({
    potency: z.string().optional(),
    duration: z.string().optional(),
    difficulty: z.string().optional(),
    sideEffects: z.string().optional(),
  })
  .optional();

const MagicalBrewStatsSchema = z
  .object({
    arcanePotency: z.string().optional(),
    etherealEssence: z.string().optional(),
    corporealMass: z.string().optional(),
    vitalForce: z.string().optional(),
    mysticalResidue: z.string().optional(),
    pureMagic: z.string().optional(),
    elementalBalance: z.string().optional(),
    spiritResonance: z.string().optional(),
  })
  .optional();

export const PotionFormSchema = z.object({
  title: z.string().min(1, "Le titre est obligatoire"),
  creationDate: z
    .string()
    .datetime("La date de création doit être au format ISO 8601")
    .optional(),
  rating: z
    .number()
    .min(0, "La note doit être supérieure ou égale à 0")
    .max(5, "La note doit être inférieure ou égale à 5")
    .optional(),
  description: z.string().min(1, "La description est obligatoire").optional(),
  details: z.string().optional(),
  thumbnailUrl: z
    .string()
    .url("L'URL de la vignette n'est pas valide")
    .optional(),
  mainImageUrl: z
    .string()
    .url("L'URL de l'image principale n'est pas valide")
    .optional(),
  metrics: MetricsSchema,
  magicalBrewStats: MagicalBrewStatsSchema,
  instructions: z
    .array(z.string())
    .min(1, "Au moins une instruction est requise")
    .optional(),
  tags: z.array(z.string()).optional(),
  ingredients: z
    .array(IngredientSchema)
    .min(1, "Au moins un ingrédient est requis")
    .optional(),
});

export type PotionFormValues = z.infer<typeof PotionFormSchema>;
