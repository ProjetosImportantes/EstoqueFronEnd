import api from "./api";

export const associateMaterial = async (
  productId: number,
  rawMaterialId: number,
  requiredQuantity: number
) => {
  return api.post("/product-raw-materials", {
    productId,
    rawMaterialId,
    requiredQuantity,
  });
};

export const getProductMaterials = async (productId: number) => {
  const response = await api.get(`/products/${productId}/materials`);
  return response.data;
};

export const deleteAssociation = async (id: number) => {
  return api.delete(`/product-raw-materials/${id}`);
};
