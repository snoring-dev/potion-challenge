import { z } from "zod";

const IngredientSchema = z.object({
  id: z.string(),
  quantity: z.number().int().positive(),
});
const MetricsSchema = z.object({
  potency: z.string(),
  duration: z.string(),
  difficulty: z.string(),
  sideEffects: z.string(),
});
const MagicalBrewStatsSchema = z.object({
  arcanePotency: z.string(),
  etherealEssence: z.string(),
  corporealMass: z.string(),
  vitalForce: z.string(),
  mysticalResidue: z.string(),
  pureMagic: z.string(),
  elementalBalance: z.string(),
  spiritResonance: z.string(),
});
export const PotionFormSchema = z.object({
  title: z.string(),
  creationDate: z.string().datetime(),
  rating: z.number().min(0).max(5),
  description: z.string(),
  details: z.string(),
  thumbnailUrl: z.string().url(),
  mainImageUrl: z.string().url(),
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
