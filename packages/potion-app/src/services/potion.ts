import axios from "axios";
import { Potion as PotionType } from "../types/Potion";

export const fetchPotions = async (): Promise<PotionType[]> => {
  try {
    const resp = await axios.get<PotionType[]>('http://localhost:58300/api/potions');
    return resp.data;
  } catch (err) {
    throw new Error('Failed to fetch potions');
  }
};