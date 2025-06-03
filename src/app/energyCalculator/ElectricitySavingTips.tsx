// src/app/energyCalculator/ElectricitySavingTips.tsx
import React from 'react';

interface ElectricitySavingTipsProps {
  // Anda bisa menambahkan props jika tips ini perlu data dinamis,
  // misalnya, hasil perhitungan untuk memberikan tips yang lebih relevan.
  // currentCalculationResult?: number;
}

type TipsBoxRowProps = {
  message: string;
}

export function TipsBoxRow({message}: TipsBoxRowProps){
  return (
    <div className='flex flex-row px-1 border w-full h-12 py-1'>
      {/* TODO: icon */}
      <div>
        <p className='text-gray-700 text-sm'>{message}</p>
      </div>
    </div>
  )
}

export const ElectricitySavingTips: React.FC<ElectricitySavingTipsProps> = () => {
  // Contoh tips statis
  const tips = [
    "Matikan lampu saat tidak digunakan.",
    "Cabut charger perangkat jika tidak digunakan.",
    "Gunakan AC pada suhu 24-26 derajat Celsius.",
    "Bersihkan kulkas secara teratur untuk efisiensi.",
    "Manfaatkan cahaya alami di siang hari.",
    "Gunakan peralatan elektronik hemat energi (label Energy Star)."
  ];

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">Tips Pengurangan Biaya Listrik</h4>
      <div className='flex flex-col gap-y-1'>
        {tips.map((item, index) => <TipsBoxRow key={index} message={item}/>)}
      </div>
      {/* Anda bisa menambahkan logika untuk tips dinamis di sini */}
      {/* {props.currentCalculationResult && props.currentCalculationResult > 100000 && (
        <p className="mt-3 text-sm text-red-600">
          Biaya listrik Anda cukup tinggi! Pertimbangkan untuk lebih menghemat.
        </p>
      )} */}
    </div>
  );
};