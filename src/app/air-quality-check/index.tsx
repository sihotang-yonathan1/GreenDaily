import { useState } from "react";

// Deklarasi agar TypeScript mengenali window.api
declare global {
  interface Window {
    api: {
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
      const data = await window.api.getAirQuality(city, state, country);
      setResult(data);
    } catch (err) {
      setResult({ status: "fail", error: String(err) });
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Cek Kualitas Udara</h2>
      <div className="mb-2">
        <input
          className="border p-1 mr-1"
          placeholder="Kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="border p-1 mr-1"
          placeholder="Provinsi"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          className="border p-1"
          placeholder="Negara"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
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
              <div>
                <b>Lokasi:</b> {result.location?.name} ({result.location?.lat},{" "}
                {result.location?.lon})
              </div>
              <div>
                <b>AQI (IQAir):</b> {result.aqi}
              </div>
              <div>
                <b>Parameter Udara (OpenWeather):</b>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {JSON.stringify(result.openweather, null, 2)}
                </pre>
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
