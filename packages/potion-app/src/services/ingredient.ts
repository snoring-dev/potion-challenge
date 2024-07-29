import axios from "axios";
import { Ingredient } from "../types/Ingredient";

export const fetchIngredients = async (): Promise<Ingredient[]> => {
  try {
    const resp = await axios.get<Ingredient[]>(
      "http://localhost:58300/api/ingredients"
    );
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
    const resp = await axios.post<Ingredient>(
      `http://localhost:58300/api/ingredients/${id}/inventory`,
      { inventory: value }
    );

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
    const resp = await axios.post<Ingredient>(
      `http://localhost:58300/api/ingredients`,
      {
        name,
        shortDescription,
        inventory,
      }
    );

    return resp.data;
  } catch (err) {
    throw new Error("Failed to create a new ingredient");
  }
};
