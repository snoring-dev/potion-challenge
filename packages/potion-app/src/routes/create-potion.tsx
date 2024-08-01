import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { AddPotionForm } from "../components/AddPotionForm";
import { fetchIngredients } from "../services/ingredient";
import { Ingredient as IngredientType } from "../types/Ingredient";
import LoadingState from "../components/LoadingState";

export const Route = createFileRoute("/create-potion")({
  loader: () => fetchIngredients(),
  component: CreatePotionPage,
  pendingComponent: () => <LoadingState />,
});

function CreatePotionPage() {
  const ingredients = useLoaderData({
    from: "/create-potion",
    select: (data: unknown): IngredientType[] => data as IngredientType[],
  });

  return <AddPotionForm ingredients={ingredients} />;
}
