import api from "./api";
import type { Product } from "../types/Product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const createProduct = async (product: Product) => {
  return api.post("/products", product);
};

export const updateProduct = async (id: number, product: Product) => {
  return api.put(`/products/${id}`, product);
};

export const deleteProduct = async (id: number) => {
  return api.delete(`/products/${id}`);
};
