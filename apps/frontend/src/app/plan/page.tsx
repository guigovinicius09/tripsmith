"use client";
import { useState } from "react";

export default function Planejar() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const rawBudget = formData.get("budget") as string;
    const normalized = parseFloat(
      rawBudget.replace(/\./g, "").replace(",", ".")
    );
    const budget = Math.round(normalized * 100);

    const rawData = {
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      destination: formData.get("destination"),
      budget,
    };

    const res = await fetch("/api/planning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawData),
    });

    const result = await res.json();
    setStatus(`✅ ${result.message} → ${JSON.stringify(result.data)}`);
  }
  return (
    <section className="pt-15 flex justify-center text-(--text-color)">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-(--primary) rounded-lg p-5 text-center w-120 flex flex-col items-center">
        <label htmlFor="dates" className="pb-3">
          DATAS
        </label>
        <div className="flex flex-row gap-8" id="dates">
          <div className="flex flex-col">
            <label htmlFor="startDate">Entrada:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="border-1 rounded-xl border-(--action) p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate">Volta:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="border-1 rounded-xl border-(--action) p-2"
            />
          </div>
        </div>
        <label htmlFor="destination" className="pt-4 pb-1">
          DESTINO
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="ex.: Inglaterra"
          className="text-center border-1 border-(--action) rounded-lg p-2 w-75"
        />
        <label htmlFor="budget" className="pt-4 pb-1">
          ORÇAMENTO
        </label>
        <input
          type="text"
          id="budget"
          name="budget"
          placeholder="ex.: 1.500,00"
          className="text-center border-1 border-(--action) rounded-lg p-2 w-75"
        />
        <div className="pt-6">
          <input
            type="submit"
            value={"Planejar Rota"}
            className="bg-(--primary) text-white rounded-lg p-2 cursor-pointer hover:bg-(--action) hover:scale-105 duration-300 w-60"
          />
        </div>
      </form>
      {status && <p className="pt-4">{status}</p>}
    </section>
  );
}
