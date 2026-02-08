import { useEffect, useState } from "react";
import { getProductionSuggestion } from "../../api/productionService";
import type { ProductionResponse } from "../../types/Production";
import "./production.css";

export default function ProductionPage() {
  const [data, setData] = useState<ProductionResponse | null>(null);

  const loadProduction = async () => {
    const response = await getProductionSuggestion();
    setData(response);
  };

  useEffect(() => {
    loadProduction();
  }, []);

  return (
    <div>
      <h1>Production Suggestion</h1>

      <button onClick={loadProduction}>Recalculate</button>

      <div className="cards">
        {data?.items.map((item) => (
          <div key={item.productId} className="card">
            <h3>{item.productName}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Unit Price: ${item.unitPrice}</p>
            <p>Total: ${item.totalValue}</p>
          </div>
        ))}
      </div>

      {data && (
        <div className="total">
          Total Production Value: ${data.totalProductionValue}
        </div>
      )}
    </div>
  );
}
