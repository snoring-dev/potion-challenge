import { Ingredient } from "../types/Ingredient";
import { api } from "../utils/api";

export const fetchIngredients = async (): Promise<Ingredient[]> => {
  try {
    const resp = await api.get<Ingredient[]>("/ingredients");
    return resp.data;
  } catch (err) {
    throw new Error("Failed to fetch ingredients");
  }
};

export const updateInventory = async (
  id: string,
  value: number
): Promise<Ingredient> => {
  try {
    const resp = await api.post<Ingredient>(`/ingredients/${id}/inventory`, {
      inventory: value,
    });

    return resp.data;
  } catch (err) {
    throw new Error("Failed to update inventory");
  }
};

export const createIngredient = async ({
  name,
  shortDescription,
  inventory,
}: Partial<Ingredient>): Promise<Ingredient> => {
  try {
    const resp = await api.post<Ingredient>(`/ingredients`, {
      name,
      shortDescription,
      inventory,
    });

    return resp.data;
  } catch (err) {
    throw new Error("Failed to create a new ingredient");
  }
};
