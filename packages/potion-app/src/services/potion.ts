import axios from "axios";
import { PotionFormData, Potion as PotionType } from "../types/Potion";

export const fetchPotions = async (): Promise<PotionType[]> => {
  try {
    const resp = await axios.get<PotionType[]>(
      "http://localhost:58300/api/potions"
    );
    return resp.data;
  } catch (err) {
    throw new Error("Failed to fetch potions");
  }
};

export const getSinglePotion = async (id: string): Promise<PotionType> => {
  try {
    const resp = await axios.get<PotionType>(
      `http://localhost:58300/api/potions/${id}`
    );
    return resp.data;
  } catch (err) {
    throw new Error(`Failed to fetch potion with id=${id}`);
  }
};

export const savePotion = async (data: PotionFormData): Promise<PotionType> => {
  try {
    const resp = await axios.post<PotionType>(
      "http://localhost:58300/api/potions",
      data
    );
    return resp.data;
  } catch (err) {
    throw new Error("Failed to save a new potion");
  }
};
