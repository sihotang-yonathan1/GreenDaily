import { useState } from "react";
import { CalculatorDeviceRow, type DeviceMapItemData } from '../components/CalculatorDeviceRow'; // Pastikan path ini benar

// Data awal dengan ID unik
const initialDeviceData: DeviceMapItemData[] = [{
  id: `init-device-${Date.now()}-1`,
  name: "Perangkat1",
  price: 50, // Asumsi ini adalah 'harga' atau 'tarif' default per unit KWh/day untuk perangkat ini, atau bisa 0 jika tarif global
  count: 10, // Ini bisa jadi KWh atau Watt, tergantung definisi Anda
}, {
  id: `init-device-${Date.now()}-2`,
  name: "Perangkat2",
  price: 50,
  count: 10,
}];

export function CalculatorByDevice() {
  const [tempData, setTempData] = useState<DeviceMapItemData[]>(initialDeviceData);

  function handleAddItem(data: Omit<DeviceMapItemData, 'id'>) {
    const newItem: DeviceMapItemData = {
      ...data,
      id: `device-${Date.now()}-${tempData.length + Math.random().toString(36).substring(7)}`, // ID lebih unik
    };
    setTempData(prevTempData => [...prevTempData, newItem]);
  }

  function handleDeleteItem(idToDelete: string) {
    setTempData(prevData => prevData.filter(item => item.id !== idToDelete));
  }

  // Logika untuk menghitung total hasil (contoh sederhana)
  // Ini akan perlu disesuaikan jika 'price' adalah tarif global dan 'count' adalah KWh
  // atau jika 'count' adalah Watt dan ada durasi.
  // Untuk sekarang, kita anggap price di DeviceMapItemData adalah tarif per unit count.
  const calculateTotal = () => {
    return tempData.reduce((total, item) => total + (item.price * item.count), 0);
  };

  return (
    <div className="flex flex-col h-full gap-y-2 w-full p-4"> {/* Tambahkan padding jika perlu */}
      {/* Wrapper untuk daftar perangkat agar bisa di-scroll */}
      <div className="device-list-container flex flex-col gap-y-2" style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '10px', marginBottom: '1rem' }}>
        {tempData.map((item) => (
          <CalculatorDeviceRow
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            count={item.count}
            onDelete={handleDeleteItem}
            // Jika Anda ingin update dinamis dari child:
            // onUpdate={(updatedField, newValue) => handleUpdateItem(item.id, updatedField, newValue)}
          />
        ))}
      </div>

      {/* Add button */}
      <div className="flex justify-center">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleAddItem({ name: "", price: 0, count: 0 })} // Sesuaikan default price jika perlu
        >
          Tambah Perangkat
        </button>
      </div>

      {/* Result */}
      <div className="flex flex-col w-full px-1 gap-y-2 mt-4">
        <label htmlFor="deviceCalculationResult" className="text-center font-semibold">Hasil Perhitungan</label>
        <input
          type="number"
          id="deviceCalculationResult"
          className="border py-2 bg-gray-200 px-2 text-gray-700 rounded-md text-center" // Sedikit styling
          value={calculateTotal()} // Panggil fungsi kalkulasi
          disabled // Tetap disabled karena ini adalah output
        />
      </div>
    </div>
  );
}