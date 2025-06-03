import { useState } from "react";

type DeviceMapItemData = {
  name: string;
  price: number,
  count: number,

}

const deviceData: DeviceMapItemData[] = [{
  name: "Perangkat1",
  price: 50,
  count: 10,
}, {
  name: "Perangkat2",
  price: 50,
  count: 10,
}]

function CalculatorDeviceRow({name, price, count}: DeviceMapItemData){
  const [tempInput, setTempInput] = useState<DeviceMapItemData>({
    name: name,
    count: count,
    price: price
  })
  return (
    <div className="flex flex-row w-full gap-x-4 px-1">
      {/* Device name */}
      <div className="flex flex-col w-full gap-y-1">
        <label htmlFor="devicetype" className="font-semibold">Perangkat</label>
        <input 
          type="text" 
          className="border py-2 px-2"
          id="deviceType"
          value={tempInput.name}
          onChange={event => setTempInput({...tempInput, name: event.target.value})}
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
          value={tempInput.count}
          onChange={event => setTempInput({...tempInput, count: Number(event.target.value ?? 0)})}
        />
      </div>
    </div>
  )
}

export function CalculatorByDevice(){
  const [tempData, setTempData] = useState<DeviceMapItemData[]>(deviceData)
  
  function handleAddItem(data: DeviceMapItemData){
    setTempData([...tempData, data])
  }
  
  return (
    <div className="flex flex-col h-full gap-y-2 w-full">
      {tempData.map((item, index) => (
        <CalculatorDeviceRow 
          key={index} 
          name={item.name}
          price={item.price}
          count={item.count}
        />)
      )}

      {/* Add button */}
      <div className="flex justify-center">
        <button 
          onClick={_ => handleAddItem({name: "", price: 0, count: 0})}>
          Tambah Perangkat
        </button>
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