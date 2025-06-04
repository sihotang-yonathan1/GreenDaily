import { useState } from "react";

// Deklarasi agar TypeScript mengenali window.api
declare global {
  interface Window {
    electronAPI: {
      getAirQuality: (
        city: string,
        state: string,
        country: string
      ) => Promise<{
        status: string;
        location?: { lat: number; lon: number; name: string };
        aqi?: number;
        openweather?: any;
        error?: string;
      }>;
    };
  }
}

export const AirQualityCheck: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);
    try {
      const data = await window.electronAPI.getAirQuality(city, state, country); // Ganti di sini
      setResult(data);
    } catch (err) {
      setResult({ status: "fail", error: String(err) });
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow flex flex-col w-full">
      <h2 className="text-xl font-bold mb-2">Cek Kualitas Udara</h2>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-2">
        
        {/* Input Kota */}
        <div className="flex md:flex-col items-center md:items-baseline justify-normal md:justify-center gap-x-2 md:gap-y-2">
          <label htmlFor="cityInput" className="hidden md:block">Kota</label>
          <input
            id="cityInput"
            className="border p-1 mr-1"
            placeholder="Kota"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* Input Provinsi */}
        <div className="flex md:flex-col items-center md:items-baseline justify-normal md:justify-center gap-x-2 md:gap-y-2">
          <label htmlFor="stateInput" className="hidden md:block">Provinsi</label>
          <input
            id="stateInput"
            className="border p-1 mr-1"
            placeholder="Provinsi"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        {/* Input Negara */}
        <div className="flex md:flex-col items-center md:items-baseline justify-normal md:justify-center gap-x-2 md:gap-y-2">
          <label htmlFor="countryInput" className="hidden md:block">Provinsi</label>
          <input
            id="countryInput"
            className="border p-1 mr-1"
            placeholder="Negara"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

      </div>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleCheck}
        disabled={loading}
      >
        {loading ? "Memuat..." : "Cek"}
      </button>
      {result && (
        <div className="mt-4">
          {result.status === "success" ? (
            <div>
              <div className="mb-2">
                <b>Lokasi:</b> {result.location?.name} ({result.location?.lat}, {result.location?.lon})
              </div>
              <div className="mb-2">
                <b>AQI (IQAir):</b>{" "}
                <span className={
                  result.aqi < 50 ? "text-green-600 font-bold" :
                  result.aqi < 100 ? "text-yellow-600 font-bold" :
                  result.aqi < 150 ? "text-orange-600 font-bold" :
                  result.aqi < 200 ? "text-red-600 font-bold" : "text-purple-700 font-bold"
                }>
                  {result.aqi}
                </span>
              </div>
              <div className="mb-2">
                <b>Parameter Udara (OpenWeather):</b>
                <table className="mt-2 border bg-gray-50 text-sm rounded">
                  <tbody>
                    <tr><td className="border px-2 py-1">CO</td><td className="border px-2 py-1">{result.openweather.list[0].components.co} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">NO</td><td className="border px-2 py-1">{result.openweather.list[0].components.no} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">NO₂</td><td className="border px-2 py-1">{result.openweather.list[0].components.no2} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">O₃</td><td className="border px-2 py-1">{result.openweather.list[0].components.o3} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">SO₂</td><td className="border px-2 py-1">{result.openweather.list[0].components.so2} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">PM2.5</td><td className="border px-2 py-1">{result.openweather.list[0].components.pm2_5} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">PM10</td><td className="border px-2 py-1">{result.openweather.list[0].components.pm10} μg/m³</td></tr>
                    <tr><td className="border px-2 py-1">NH₃</td><td className="border px-2 py-1">{result.openweather.list[0].components.nh3} μg/m³</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-red-500">Error: {result.error}</div>
          )}
        </div>
      )}
    </div>
  );
};
