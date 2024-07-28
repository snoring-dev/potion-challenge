import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Typography } from "potion-ui";
import { fetchIngredients } from "../services/ingredient";
import DataTable, { Column } from "../components/DataTable";
import { Ingredient as IngredientType } from "../types/Ingredient";
import { IngredientInventory } from "../components/IngredientInventory";

export const Route = createFileRoute("/ingredients")({
  loader: () => fetchIngredients(),
  component: Ingredients,
});

function Ingredients() {
  const ingredients = useLoaderData({
    from: "/ingredients",
    select: (data: unknown): IngredientType[] => data as IngredientType[],
  });

  const columns: Array<Column<IngredientType>> = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "shortDescription", header: "Description" },
    {
      key: "inventory",
      header: "Inventory",
      render: (value, { id }) => <IngredientInventory value={Number(value)} id={id} />,
    },
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
