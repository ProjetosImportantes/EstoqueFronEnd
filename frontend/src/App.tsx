import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsPage from "./pages/Products/ProducsPage";
import RawMaterialsPage from "./pages/RawMaterials/RawMaterialsPage";
import ProductionPage from "./pages/Production/ProductionPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/raw-materials" element={<RawMaterialsPage />} />
          <Route path="/production" element={<ProductionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
