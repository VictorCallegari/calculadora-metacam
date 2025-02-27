"use client";
import { useState } from "react";
import { calculateValues, findCheapest } from "./lib/calculations";
import { competitorOptions } from "./lib/competitors";

interface Product {
  name: string;
  apresentation: number;
  mlPerkg: number;
  price: number;
  weight: number;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([
    { name: "Metacam", apresentation: 0, mlPerkg: 0, price: 0, weight: 0 },
  ]);

  const handleChange = (index: number, field: keyof Product, value: string) => {
    const newProducts = [...products];
    newProducts[index] = {
      ...newProducts[index],
      [field]: parseFloat(value) || 0,
    };
    setProducts(newProducts);
  };

  const addCompetitor = () => {
    setProducts([
      ...products,
      { name: "", apresentation: 0, mlPerkg: 0, price: 0, weight: 0 },
    ]);
  };

  const cheapestProduct = findCheapest(products);

  return (
    <section className="p-4">
      <div className="border-2 rounded-md border-[#852a85] p-4 bg-white/30 backdrop-blur-none">
        {products.map((product, index) => {
          const { doseMl, pricePerDose, pricePerTreatment } =
            calculateValues(product);

          return (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Produto */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Produto:</label>
                  {product.name === "Metacam" ? (
                    <span className="text-2xl">METACAM&reg;</span>
                  ) : (
                    <select
                      value={product.name}
                      onChange={(e) => {
                        const selectedCompetitor = competitorOptions.find(
                          (c) => c.name === e.target.value
                        );
                        if (selectedCompetitor) {
                          const newProducts = [...products];
                          newProducts[index] = {
                            ...newProducts[index],
                            name: selectedCompetitor.name,
                            apresentation: selectedCompetitor.apresentation,
                            mlPerkg: selectedCompetitor.mlPerkg,
                          };
                          setProducts(newProducts);
                        }
                      }}
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Escolha um concorrente</option>
                      {competitorOptions.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Apresentação */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Apresentação:</label>
                  <input
                    type="number"
                    value={product.apresentation || ""}
                    onChange={(e) =>
                      handleChange(index, "apresentation", e.target.value)
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                </div>

                {/* ml para 100 kg */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">ml/100kg:</label>
                  <input
                    type="number"
                    value={product.mlPerkg || ""}
                    onChange={(e) =>
                      handleChange(index, "mlPerkg", e.target.value)
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                </div>

                {/* Preço */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Preço (R$):</label>
                  <input
                    type="number"
                    value={product.price || ""}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                </div>

                {/* Peso */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Peso (kg):</label>
                  <input
                    type="number"
                    value={product.weight || ""}
                    onChange={(e) =>
                      handleChange(index, "weight", e.target.value)
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                </div>

                {/* Dose */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Dose (ml):</label>
                  <span>{doseMl.toFixed(2)} ml</span>
                </div>

                {/* Preço/Dose */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Preço/Dose:</label>
                  <span>R$ {pricePerDose.toFixed(2)}</span>
                </div>

                {/* Preço/Tratamento */}
                <div className="flex items-center gap-2">
                  <label className="font-bold">Preço/Tratamento:</label>
                  <span>R$ {pricePerTreatment.toFixed(2)}</span>
                </div>
              </div>

              {/* Linha separadora entre os concorrentes */}
              {index !== products.length - 1 && <hr className="my-4" />}
            </div>
          );
        })}
      </div>

      {/* Mensagem de menor preço */}
      {products.length > 1 && (
        <div className="mt-4 p-3 text-center rounded border">
          {cheapestProduct === "Metacam" ? (
            <p className="text-green-800 bg-green-100 border border-green-400 p-2">
              ✅ O Metacam tem o menor preço por tratamento!
            </p>
          ) : (
            <p className="text-red-800 bg-red-100 border border-red-400 p-2">
              ⚠️ {cheapestProduct} tem o menor preço por tratamento!
            </p>
          )}
        </div>
      )}

      {/* Botão para adicionar concorrente */}
      <button
        onClick={addCompetitor}
        className="mt-4 bg-blue-500 text-black p-2 rounded hover:bg-blue-600 w-full sm:w-auto"
      >
        Adicionar Concorrente
      </button>
    </section>
  );
}
