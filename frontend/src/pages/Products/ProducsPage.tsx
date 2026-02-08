import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productService";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({
    code: "",
    name: "",
    price: 0,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateProduct(editingId, form);
      setEditingId(null);
    } else {
      await createProduct(form);
    }

    setForm({ code: "", name: "", price: 0 });
    loadProducts();
  };

  const handleEdit = (product: Product) => {
    setForm(product);
    setEditingId(product.id!);
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: Number(e.target.value) })
          }
        />
        <button type="submit">
          {editingId ? "Update" : "Create"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.code}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Edit</button>
                <button onClick={() => handleDelete(p.id!)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
