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
