import React, { useEffect, useState } from "react";

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

export function CalculatorDeviceRow({ id, name, count, price, onDelete, onUpdate }: CalculatorDeviceRowProps) {
  const [deviceName, setDeviceName] = useState<string>(name);
  const [deviceCount, setDeviceCount] = useState<number>(count);
  // Code got comment due tnfinite render
  const [currentDevicePrice, setCurrentDevicePrice ] = useState<number>(price); // Menggunakan state untuk harga aktual yang ditampilkan

  // Effect untuk memperbarui harga perangkat ketika nama perangkat berubah
  useEffect(() => {
    const selectedDevice = deviceMapping[deviceName.toLowerCase()]; // Mencocokkan nama perangkat dengan mapping
    if (selectedDevice) {
      setCurrentDevicePrice(selectedDevice.price); // Update state harga lokal
      onUpdate(id, "price", selectedDevice.price); // Juga update harga di parent
    }
  }, [deviceName, id]); // Tambahkan id dan onUpdate ke dependency array

  // Effect untuk memastikan state harga lokal sinkron dengan prop price dari parent
  // useEffect(() => {
  //   if (price !== currentDevicePrice) {
  //     setCurrentDevicePrice(price);
  //   }
  // }, [price, currentDevicePrice]);


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
    // Harga akan diperbarui oleh useEffect pertama
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

      {/* Menampilkan Harga Perangkat (read-only) */}
      <div className="flex flex-col w-1/4 gap-y-1">
        <label htmlFor={`devicePrice-${id}`} className="font-semibold text-sm">
          Harga
        </label>
        <input
          type="number"
          id={`devicePrice-${id}`}
          value={currentDevicePrice}
          className="border py-2 px-2 rounded-md bg-gray-100 text-center text-sm"
          disabled
          readOnly
        />
      </div>

      {/* Tombol Hapus dengan SVG Icon */}
      <div className="flex items-end h-full pt-5">
        <button
          onClick={() => onDelete(id)}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
          aria-label={`Delete ${deviceName}`}
        >
          {/* Ikon tempat sampah SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
