import { useState } from "react"
import { NavLink, Outlet } from "react-router"

export function CalculatorLayout(){
  return (
    <div className="flex flex-col h-full">
      {/* Tab */}
      <div className="flex flex-row w-full bg-amber-400 py-2 gap-x-2 justify-between px-[20%]">
        <NavLink to="/calculator">Price</NavLink>
        <NavLink to="byDevice">Device</NavLink>
      </div>
      {/* Child */}
      <Outlet />
    </div>
  )
}

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

function CalculatorDeviceRow(){
  return (
    <div className="flex flex-row w-full gap-x-4 px-1">
      {/* Device name */}
      <div className="flex flex-col w-full gap-y-1">
        <label htmlFor="devicetype" className="font-semibold">Perangkat</label>
        <input 
          type="text" 
          className="border py-2 px-2"
          id="deviceType"
          />
      </div>

      {/* Device Number */}
      <div className="flex flex-col w-full gap-y-1">
        <label htmlFor="deviceNumber" className="font-semibold">Jumlah</label>
        <input 
          type="number"
          id="deviceNumber" 
          min={0}
          className="border py-2 px-2"
        />
      </div>
    </div>
  )
}

export function CalculatorByDevice(){
  return (
    <div className="flex flex-col h-full gap-y-2 w-full">
      <CalculatorDeviceRow />

      {/* Add button */}
      <div className="flex justify-center">
        <button>Tambah Perangkat</button>
      </div>

      {/* Result */}
      <div className="flex flex-col w-full px-1 gap-y-2">
        <label htmlFor="deviceCalculationResult" className="text-center font-semibold">Hasil</label>
        <input 
          type="number" 
          id="deviceCalculationResult" 
          className="border py-2 bg-gray-400 px-2"
          disabled />
      </div>
    </div>
  )
}

export default function CalculatorPage(){
  return (
    <div>
      <p>Hello</p>
    </div>
  ) 
}