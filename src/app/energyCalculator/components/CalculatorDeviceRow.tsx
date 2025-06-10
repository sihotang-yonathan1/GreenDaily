import { useState, useEffect } from "react";

// Tipe untuk perangkat
export type DeviceMapItemData = {
  id: string;
  name: string;
  price: number;
  count: number;
};

// Data mapping perangkat yang tersedia
const deviceMapping: Record<string, { price: number; name: string }> = {
  kulkas: { price: 30, name: 'Kulkas' },
  mesinCuci: { price: 20, name: 'Mesin Cuci' },
  AC: { price: 50, name: 'AC' },
  televisi: { price: 40, name: 'Televisi' },
};

type CalculatorDeviceRowProps = DeviceMapItemData & {
  onDelete: (id: string) => void;
  onUpdate: (id: string, field: keyof DeviceMapItemData, value: number) => void;
};

export function CalculatorDeviceRow({ id, name, price, count, onDelete, onUpdate }: CalculatorDeviceRowProps) {
  const [deviceName, setDeviceName] = useState<string>(name);
  const [deviceCount, setDeviceCount] = useState<number>(count);
  const [,setDevicePrice] = useState<number>(price);

  // Effect untuk memperbarui harga perangkat ketika nama perangkat berubah
  useEffect(() => {
    const selectedDevice = deviceMapping[deviceName.toLowerCase()]; // Mencocokkan nama perangkat dengan mapping
    if (selectedDevice) {
      setDevicePrice(selectedDevice.price);
    }
  }, [deviceName]);

  // Handle perubahan jumlah perangkat
  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Math.max(0, Number(event.target.value)); // Menghindari nilai negatif
    setDeviceCount(newCount);
    onUpdate(id, "count", newCount);
  };

  // Handle perubahan perangkat yang dipilih dari select
  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    setDeviceName(selectedName);
    const selectedDevice = deviceMapping[selectedName.toLowerCase()];
    if (selectedDevice) {
      setDevicePrice(selectedDevice.price); // Update harga perangkat
      onUpdate(id, "price", selectedDevice.price); // Update harga di parent
    }
  };

  return (
    <div className="flex flex-row w-full gap-x-4 px-1 items-center mb-2">
      {/* Input Pilih Perangkat (Select) */}
      <div className="flex flex-col flex-grow gap-y-1">
        <label htmlFor={`deviceType-${id}`} className="font-semibold text-sm">
          Perangkat
        </label>
        <select
          id={`deviceType-${id}`}
          value={deviceName}
          onChange={handleDeviceChange}
          className="border py-2 px-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {Object.keys(deviceMapping).map((deviceKey) => {
            const device = deviceMapping[deviceKey];
            return (
              <option key={deviceKey} value={deviceKey}>
                {device.name}
              </option>
            );
          })}
        </select>
      </div>

      {/* Input Jumlah Perangkat */}
      <div className="flex flex-col w-1/4 gap-y-1">
        <label htmlFor={`deviceNumber-${id}`} className="font-semibold text-sm">
          Jumlah
        </label>
        <input
          type="number"
          id={`deviceNumber-${id}`}
          min={0}
          className="border py-2 px-2 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
          value={deviceCount}
          onChange={handleCountChange}
        />
      </div>

      {/* Tombol Hapus */}
      <div className="flex items-end h-full pt-5">
        <button
          onClick={() => onDelete(id)}
          className="py-2 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          X
        </button>
      </div>
    </div>
  );
}
