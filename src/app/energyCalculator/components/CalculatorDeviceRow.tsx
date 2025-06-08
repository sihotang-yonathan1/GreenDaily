import { useState } from "react";

// Tipe ini bisa juga diimpor dari berkas tipe global jika Anda punya
export type DeviceMapItemData = {
  id: string;
  name: string;
  // price: number; // Meskipun tidak digunakan di baris ini, ini bagian dari data perangkat
  count: number;
};

// Definisikan tipe props untuk CalculatorDeviceRow
type CalculatorDeviceRowProps = DeviceMapItemData & {
  onDelete: (id: string) => void;
  // Nantinya bisa ditambahkan: onUpdate: (id: string, updatedData: Partial<DeviceMapItemData>) => void;
};

export function CalculatorDeviceRow({ 
  id, 
  name, 
  // price, // price diterima sebagai prop tapi tidak digunakan untuk input di baris ini secara langsung
  count, 
  onDelete 
}: CalculatorDeviceRowProps) {
  // State lokal untuk input di baris ini
  // Jika Anda ingin perubahan di sini langsung update ke parent (CalculatorByDevice),
  // Anda perlu mengangkat state ini ke parent atau menggunakan prop onUpdate.
  // Untuk sekarang, kita biarkan state ini lokal untuk input.
  const [deviceName, setDeviceName] = useState<string>(name);
  const [deviceCount, setDeviceCount] = useState<number>(count);

  return (
    <div className="flex flex-row w-full gap-x-4 px-1 items-center mb-2"> {/* Tambah margin-bottom */}
      {/* Input Nama Perangkat */}
      <div className="flex flex-col flex-grow gap-y-1"> {/* flex-grow agar mengambil sisa ruang */}
        <label htmlFor={`deviceType-${id}`} className="font-semibold text-sm"> {/* Kecilkan font label */}
          Perangkat
        </label>
        <input
          type="text"
          className="border py-2 px-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id={`deviceType-${id}`}
          value={deviceName}
          onChange={(event) => setDeviceName(event.target.value)}
          placeholder="Nama Perangkat"
        />
      </div>

      {/* Input Jumlah */}
      <div className="flex flex-col w-1/4 gap-y-1"> {/* Atur lebar spesifik */}
        <label htmlFor={`deviceNumber-${id}`} className="font-semibold text-sm">
          Jumlah
        </label>
        <input
          type="number"
          id={`deviceNumber-${id}`}
          min={0}
          className="border py-2 px-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={deviceCount}
          onChange={(event) => setDeviceCount(Number(event.target.value ?? 0))}
          placeholder="0"
        />
      </div>

      {/* Tombol Hapus */}
      <div className="flex items-end h-full pt-5"> {/* Sesuaikan pt agar tombol sejajar dengan input setelah label */}
        <button
          onClick={() => onDelete(id)}
          className="py-2 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-label={`Hapus perangkat ${deviceName}`}
        >
          X
        </button>
      </div>
    </div>
  );
}