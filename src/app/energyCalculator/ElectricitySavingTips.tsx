// src/app/energyCalculator/ElectricitySavingTips.tsx
import React from 'react';

interface ElectricitySavingTipsProps {
  // Anda bisa menambahkan props jika tips ini perlu data dinamis,
  // misalnya, hasil perhitungan untuk memberikan tips yang lebih relevan.
  // currentCalculationResult?: number;
}

interface TipsBoxRowProps {
  _message: string;
}

class TipsClass implements TipsBoxRowProps {
  _message: string;

  constructor (message: string){
    this._message = message;
  }

  showMessage(){
    console.log(this._message)
  }

  getMessage(){
    return this._message
  }
}

export function TipsBoxRow({item}: {item: TipsClass}){
  return (
    <div className='flex flex-row px-1 border w-full h-12 py-1'>
      {/* TODO: icon */}
      <div className='flex flex-row items-center'>
        <p className='text-gray-700 text-sm'>{item.getMessage()}</p>
      </div>
    </div>
  )
}

export const ElectricitySavingTips: React.FC<ElectricitySavingTipsProps> = () => {
  // Contoh tips statis
  const tips = [
    new TipsClass("Matikan lampu saat tidak digunakan."),
    new TipsClass("Cabut charger perangkat jika tidak digunakan."),
    new TipsClass("Gunakan AC pada suhu 24-26 derajat Celsius."),
    new TipsClass("Bersihkan kulkas secara teratur untuk efisiensi."),
    new TipsClass("Manfaatkan cahaya alami di siang hari."),
    new TipsClass("Gunakan peralatan elektronik hemat energi (label Energy Star)."),
  ];

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">Tips Pengurangan Biaya Listrik</h4>
      <div className='flex flex-col gap-y-1'>
        {tips.map((item, index) => <TipsBoxRow key={index} item={item}/>)}
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