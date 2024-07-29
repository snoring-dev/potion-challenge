import {
  createFileRoute,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";
import { Button, Modal, Typography } from "potion-ui";
import { fetchIngredients } from "../services/ingredient";
import DataTable, { Column } from "../components/DataTable";
import { Ingredient as IngredientType } from "../types/Ingredient";
import { IngredientInventory } from "../components/IngredientInventory";
import { AddIngredientForm } from "../components/AddIngredientForm";

export const Route = createFileRoute("/ingredients")({
  loader: () => fetchIngredients(),
  component: Ingredients,
});

function Ingredients() {
  const ingredients = useLoaderData({
    from: "/ingredients",
    select: (data: unknown): IngredientType[] => data as IngredientType[],
  });

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate({ to: "/ingredients", search: {}, hash: "" });
  };

  const columns: Array<Column<IngredientType>> = [
    {
      key: "id",
      header: "ID",
      render: (value) => (
        <Typography
          className="cursor-pointer hover:border-blue-600 hover:text-blue-600 transition-all duration-200 uppercase text-xs text-blue-300 border w-fit p-1 border-blue-300 rounded-sm"
          variant="small"
        >
          #{value}
        </Typography>
      ),
    },
    { key: "name", header: "Name" },
    { key: "shortDescription", header: "Description" },
    {
      key: "inventory",
      header: "Inventory",
      render: (value, { id }) => (
        <IngredientInventory value={Number(value)} id={id} />
      ),
    },
  ];

  const IngredientTable = DataTable<IngredientType>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between mb-3">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Ingredients List
        </Typography>
        <Modal
          title="Ajouter un ingrédient"
          renderTrigger={(open) => (
            <Button
              label="Nouvel ingrédient"
              variant="secondary"
              size="small"
              onClick={open}
            />
          )}
        >
          <AddIngredientForm onSuccess={refreshPage} />
        </Modal>
      </div>
      <IngredientTable data={ingredients} columns={columns} itemsPerPage={20} />
    </div>
  );
}
