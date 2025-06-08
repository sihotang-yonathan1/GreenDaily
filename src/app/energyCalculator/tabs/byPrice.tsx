import React, { useState, useEffect } from "react";

// 1. Define VA Tariff Data
// This data is crucial for the VA selection feature.
// Please ensure these tariff values are accurate according to PLN regulations.
const vaTariffs = [
  { va: 450, label: 'Rumah Tangga 450 VA', tariff: 169.95 }, // Example Rp/kWh
  { va: 900, label: 'Rumah Tangga 900 VA (Subsidi)', tariff: 605.00 },
  { va: 900, label: 'Rumah Tangga 900 VA RTM', tariff: 1352.00 },
  { va: 1300, label: 'Rumah Tangga 1300 VA', tariff: 1444.70 },
  { va: 2200, label: 'Rumah Tangga 2200 VA', tariff: 1444.70 },
  { va: 0, label: 'Input Manual', tariff: 0 }, // Option for manual input
];

export function CalculatorByPrice() {
  // 2. Add State for VA Selection and update existing states
  // selectedVA: Stores the selected VA value (0 for 'Input Manual').
  const [selectedVA, setSelectedVA] = useState<number | string>(0); 
  // totalKWh: Stores the total kWh input from the user. Using string to allow empty input field.
  const [totalKWh, setTotalKWh] = useState<number | string>(''); 
  // currentTariff: Stores the tariff per kWh, either selected from VA or manually entered. Using string.
  const [currentTariff, setCurrentTariff] = useState<number | string>(''); 
  // calculationResult: Stores the final calculated cost.
  const [calculationResult, setCalculationResult] = useState<number>(0);

  // 4. Implement handleVAChange function
  // This function updates the selectedVA and currentTariff based on dropdown selection.
  const handleVAChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedVA = Number(event.target.value);
    setSelectedVA(newSelectedVA);

    const selectedTariffInfo = vaTariffs.find(item => item.va === newSelectedVA);
    if (selectedTariffInfo) {
      setCurrentTariff(selectedTariffInfo.tariff);
    } else {
      // If 'Input Manual' (va: 0) is selected, clear the tariff field
      setCurrentTariff(''); 
    }
  };

  // 5. Update Calculation Result using useEffect
  // This hook recalculates the result whenever totalKWh or currentTariff changes.
  useEffect(() => {
    const kwh = Number(totalKWh);
    const tariff = Number(currentTariff);

    // Ensure both values are valid numbers before calculation
    // Check for non-negative values as well.
    if (!isNaN(kwh) && !isNaN(tariff) && kwh >= 0 && tariff >= 0) {
      setCalculationResult(kwh * tariff);
    } else {
      setCalculationResult(0); // Set to 0 if input is invalid or empty
    }
  }, [totalKWh, currentTariff]);

  return (
    <div className="flex flex-col h-full justify-center gap-y-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Kalkulator Harga Listrik (Per KWh)</h2>

      {/* 3. Build UI for VA Group Selection */}
      <div className="mb-4">
        <label htmlFor="vaSelection" className="block text-sm font-medium text-gray-700 mb-1">Pilih Golongan VA:</label>
        <select
          id="vaSelection"
          value={selectedVA}
          onChange={handleVAChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
        >
          {vaTariffs.map(item => (
            <option key={item.label} value={item.va}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Form input */}
      <div className="flex flex-row gap-x-3 w-full">
        {/* Total kwH */}
        <div className="flex flex-col w-full ">
          <label htmlFor="kwh" className="font-semibold">Total KWh</label>
          <input
            type="number"
            id="kwh"
            value={totalKWh} // Use totalKWh state
            min={0}
            onChange={(event) => setTotalKWh(event.target.value)} // Update totalKWh state
            className="border p-2 md:px-2 md:py-3 rounded-md" // Added rounded-md
            placeholder="Masukkan total KWh"
          />
        </div>

        {/* Tarif Listrik */}
        <div className="flex flex-col w-full">
          <label htmlFor="price" className="font-semibold">Tarif Listrik (Rp/kWh)</label> {/* Added unit */}
          <input
            type="number"
            id="price"
            value={currentTariff} // Use currentTariff state
            min={0}
            onChange={(event) => {
              setCurrentTariff(event.target.value);
              // Reset VA selection if tariff is manually changed
              // This checks if the manually entered tariff is different from the auto-filled one based on selectedVA
              if (Number(event.target.value) !== vaTariffs.find(item => item.va === selectedVA)?.tariff) {
                setSelectedVA(0); // Set to 'Input Manual' (va: 0)
              }
            }}
            className="border p-2 md:px-2 md:py-3 rounded-md" // Added rounded-md
            placeholder="Masukkan tarif listrik"
            // Make it read-only if a VA template is selected (not 'Input Manual')
            readOnly={selectedVA !== 0}
          />
        </div>
      </div>

      {/* Result */}
      {/* Changed background, border, and text colors to shades of gray/black */}
      <div className="flex flex-col mt-6 p-4 bg-gray-100 border border-gray-300 rounded-md text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">hasil Perhitungan</h3>
        <p className="text-3xl font-extrabold text-gray-900">
          Rp {calculationResult.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
}
