import { useState } from "react"

export function CalculatorByPrice(){
  const [totalKWh, setTotalKWh] = useState<number | null>(null)
  const [price, setPrice] = useState<number | null>(null)

  const result = (totalKWh ?? 0) * (price ?? 0)

  return (
    <div className="flex flex-col h-full justify-center gap-y-8">
      {/* Form input */}
      <div className="flex flex-row gap-x-3">
        {/* Total kwH */}
        <div className="flex flex-col">
          <label htmlFor="kwh" className="font-semibold">Total KWh</label>
          <input 
            type="number" 
            id="kwh" 
            value={totalKWh ?? ""} 
            min={0}
            defaultValue={totalKWh ?? ""}
            onChange={(event) => setTotalKWh(Number(event.target.value) ?? 0)}
            className="border p-2"
          />
        </div>

        {/* Tarif Listrik */}
        <div className="flex flex-col">
          <label htmlFor="price" className="font-semibold">Tarif Listrik</label>
          <input 
            type="number" 
            id="price" 
            value={price ?? ""}
            min={0} 
            onChange={(event) => setPrice(Number(event.target.value) ?? 0)}
            className="border p-2"
          />
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col">
        <h3 className="text-center capitalize font-semibold">hasil Perhitungan</h3>
        <input 
          type="number" 
          name="result" 
          id="result" 
          disabled 
          value={result}
          className="border p-2 disabled:bg-gray-100"
        />
      </div>
    </div>
  )
}