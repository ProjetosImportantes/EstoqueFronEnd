import api from "./api";
import type { ProductionResponse } from "../types/Production";

export const getProductionSuggestion = async (): Promise<ProductionResponse> => {
  const response = await api.get("/production/suggestion");
  return response.data;
};
