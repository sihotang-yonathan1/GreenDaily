import { useState } from "react";
import { CalculatorDeviceRow, type DeviceMapItemData } from '../components/CalculatorDeviceRow'; // Pastikan path ini benar

// Data awal dengan ID unik
const initialDeviceData: DeviceMapItemData[] = [{
  id: `init-device-${Date.now()}-1`,
  name: "kulkas",
  price: 30, // biaya per perangkat
  count: 1, // jumlah perangkat
}, {
  id: `init-device-${Date.now()}-2`,
  name: "mesinCuci",
  price: 20,
  count: 1,
}];

export function CalculatorByDevice() {
  const [tempData, setTempData] = useState<DeviceMapItemData[]>(initialDeviceData);

  // Fungsi untuk menambahkan perangkat baru berdasarkan nama
  function handleAddItem(data: Omit<DeviceMapItemData, 'id'>) {
    const newItem: DeviceMapItemData = {
      ...data,
      id: `device-${Date.now()}-${tempData.length + Math.random().toString(36).substring(7)}`,
    };
    setTempData(prevTempData => [...prevTempData, newItem]);
  }

  // Fungsi untuk menghapus perangkat
  function handleDeleteItem(idToDelete: string) {
    setTempData(prevData => prevData.filter(item => item.id !== idToDelete));
  }

  // Fungsi untuk memperbarui jumlah perangkat atau harga
  function handleUpdateItem(id: string, updatedField: keyof DeviceMapItemData, newValue: number) {
    setTempData(prevData => prevData.map(item =>
      item.id === id ? { ...item, [updatedField]: newValue } : item
    ));
  }

  // Fungsi untuk menghitung total biaya
  const calculateTotal = () => {
    return tempData.reduce((total, item) => total + (item.price * item.count), 0);
  };

  return (
    <div className="flex flex-col h-full gap-y-2 w-full p-4">
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
            onUpdate={handleUpdateItem}
          />
        ))}
      </div>

      {/* Button untuk menambahkan perangkat baru */}
      <div className="flex justify-center">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleAddItem({ name: "kulkas", price: 30, count: 1 })} // Misalnya "Kulkas" akan ditambahkan dengan harga 30
        >
          Tambah Perangkat
        </button>
      </div>

      {/* Menampilkan hasil perhitungan total biaya */}
      <div className="flex flex-col w-full px-1 gap-y-2 mt-4">
        <label htmlFor="deviceCalculationResult" className="text-center font-semibold">Hasil Perhitungan Biaya</label>
        <input
          type="number"
          id="deviceCalculationResult"
          className="border py-2 bg-gray-200 px-2 text-gray-700 rounded-md text-center placeholder:text-gray-500"
          value={calculateTotal()} // Panggil fungsi kalkulasi
          disabled
        />
      </div>
    </div>
  );
}
