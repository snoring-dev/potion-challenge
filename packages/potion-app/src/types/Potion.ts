import { Ingredient } from "./Ingredient";
import { MagicalBrewStats } from "./MagicalBrewStats";
import { Metrics } from "./Metrics";

export interface PotionIngredient {
  id: string;
  potionId: string;
  ingredientId: string;
  quantity: number;
  ingredient: Ingredient;
}

export interface Potion {
  metrics: Metrics;
  magicalBrewStats: MagicalBrewStats;
  id: string;
  title: string;
  creationDate: string;
  rating: number;
  description: string;
  details: string;
  thumbnailUrl: string;
  mainImageUrl: string;
  instructions: string[];
  tags: string[];
  ingredients: PotionIngredient[];
  suggestedPotions?: Potion[];
}

export type PotionFormData = Omit<Potion, "ingredients" | "id"> & {
  ingredients: {
    id: string;
    quantity: number;
  }[];
}
