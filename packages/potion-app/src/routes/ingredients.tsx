import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { fetchIngredients } from "../services/ingredient";
import DataTable from "../components/DataTable";
import { Ingredient as IngredientType } from "../types/Ingredient";
import { Typography } from "potion-ui";

export const Route = createFileRoute("/ingredients")({
  loader: () => fetchIngredients(),
  component: Ingredients,
});

function Ingredients() {
  const ingredients = useLoaderData({
    from: "/ingredients",
    select: (data: unknown): IngredientType[] => data as IngredientType[],
  });

  const columns: Array<{ key: keyof IngredientType; header: string }> = [
    { key: "name", header: "Name" },
    { key: "shortDescription", header: "Description" },
    { key: "inventory", header: "Inventory" },
  ];

  const IngredientTable = DataTable<IngredientType>;

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h2" className="text-2xl font-bold mb-4">
        Ingredients List
      </Typography>
      <IngredientTable data={ingredients} columns={columns} itemsPerPage={20} />
    </div>
  );
}
