import { PotionFormData, Potion as PotionType } from "../types/Potion";
import { api } from "../utils/api";

export const fetchPotions = async (): Promise<PotionType[]> => {
  try {
    const resp = await api.get<PotionType[]>("/potions");
    return resp.data;
  } catch (err) {
    throw new Error("Failed to fetch potions");
  }
};

export const getSinglePotion = async (id: string): Promise<PotionType> => {
  try {
    const resp = await api.get<PotionType>(`/potions/${id}`);
    return resp.data;
  } catch (err) {
    throw new Error(`Failed to fetch potion with id=${id}`);
  }
};

export const getRandomPotion = async (): Promise<PotionType> => {
  try {
    const resp = await api.get<PotionType>("/potions/random");
    return resp.data;
  } catch (err) {
    throw new Error(`Failed to fetch a random potion`);
  }
};

export const savePotion = async (data: PotionFormData): Promise<PotionType> => {
  try {
    const resp = await api.post<PotionType>("/potions", data);
    return resp.data;
  } catch (err) {
    throw new Error("Failed to save a new potion");
  }
};
