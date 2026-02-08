import { useEffect, useState } from "react";
import type { RawMaterial } from "../../types/RawMaterial";
import {
  getRawMaterials,
  createRawMaterial,
  updateRawMaterial,
  deleteRawMaterial,
} from "../../api/rawMaterialService";

export default function RawMaterialsPage() {
  const [materials, setMaterials] = useState<RawMaterial[]>([]);
  const [form, setForm] = useState<RawMaterial>({
    code: "",
    name: "",
    stockQuantity: 0,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const loadMaterials = async () => {
    const data = await getRawMaterials();
    setMaterials(data);
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateRawMaterial(editingId, form);
      setEditingId(null);
    } else {
      await createRawMaterial(form);
    }

    setForm({ code: "", name: "", stockQuantity: 0 });
    loadMaterials();
  };

  const handleEdit = (material: RawMaterial) => {
    setForm(material);
    setEditingId(material.id!);
  };

  const handleDelete = async (id: number) => {
    await deleteRawMaterial(id);
    loadMaterials();
  };

  return (
    <div>
      <h1>Raw Materials</h1>

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
          placeholder="Stock Quantity"
          value={form.stockQuantity}
          onChange={(e) =>
            setForm({ ...form, stockQuantity: Number(e.target.value) })
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
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={m.id}>
              <td>{m.code}</td>
              <td>{m.name}</td>
              <td>{m.stockQuantity}</td>
              <td>
                <button onClick={() => handleEdit(m)}>Edit</button>
                <button onClick={() => handleDelete(m.id!)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
