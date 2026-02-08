export interface ProductionItem {
    productId: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalValue: number;
}

export interface ProductionResponse {
    items: ProductionItem[];
    totalProductionValue: number;
}