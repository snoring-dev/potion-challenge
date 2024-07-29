import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { AddPotionForm } from "../components/AddPotionForm";
import { fetchIngredients } from "../services/ingredient";
import { Ingredient as IngredientType } from "../types/Ingredient";

export const Route = createFileRoute("/create-potion")({
  loader: () => fetchIngredients(),
  component: CreatePotionPage,
});

function CreatePotionPage() {
  const ingredients = useLoaderData({
    from: "/create-potion",
    select: (data: unknown): IngredientType[] => data as IngredientType[],
  });

  return <AddPotionForm ingredients={ingredients} />;
}
