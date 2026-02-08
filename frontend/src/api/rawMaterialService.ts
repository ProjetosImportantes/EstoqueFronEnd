import api from "./api";
import type { RawMaterial } from "../types/RawMaterial";

export const getRawMaterials = async (): Promise<RawMaterial[]> => {
    const response = await api.get("/raw-materials");
    return response.data;
};

export const createRawMaterial = async (data: RawMaterial) => {
    return api.post("/raw-materials", data);
};

export const updateRawMaterial = async (id: number, data: RawMaterial) => {
    return api.put(`/raw0materials/${id}`, data);
};

export const deleteRawMaterial = async (id: number) => {
    return api.delete(`/raw-materials/${id}`);
};