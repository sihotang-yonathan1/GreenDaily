import { useState } from "react";

// Icon
import AmmoniaIcon from "/src/icon/ammonia-icon.png";
import SO2Icon from "/src/icon/so2-icon.png";
import OzoneIcon from "/src/icon/o3-icon.png";

type AirQualityAPISuccessResult = {
  status: "success",
  location: { 
    lat: number, 
    lon: number, 
    name: string 
  },
  aqi: number | null,
  openweather: { list: {
    components: {
    'co': number
    'no': number
    'no2': number
    'o3': number
    'so2': number
    'pm2_5': number
    'pm10': number
    'nh3': number
  }}[]},
};

type AirQualityAPIFailedResult = {
  status: "fail",
  error: string
}

type AirQualityAPIResult = AirQualityAPISuccessResult | AirQualityAPIFailedResult

export const AirQualityCheck: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState<AirQualityAPIResult | null>(null);
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
      <div className="flex flex-row flex-wrap gap-y-2 gap-x-4 mb-2">
        
        {/* Input Kota */}
        <div className="flex md:flex-col items-center md:items-baseline justify-normal md:justify-center gap-x-2 md:gap-y-2">
          <label htmlFor="cityInput" className="hidden md:block">Kota</label>
          <input
            id="cityInput"
            className="border px-3 py-2 mr-1 placeholder:text-gray-500"
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
            className="border px-3 py-2 placeholder:text-gray-500"
            placeholder="Provinsi"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        {/* Input Negara */}
        <div className="flex md:flex-col items-center md:items-baseline justify-normal md:justify-center gap-x-2 md:gap-y-2">
          <label htmlFor="countryInput" className="hidden md:block">Negara</label>
          <input
            id="countryInput"
            className="border px-3 py-2 mr-1 placeholder:text-gray-500"
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
                {
                  result.aqi !== null &&
                  <span className={
                    result.aqi < 50 ? "text-green-600 font-bold" :
                    result.aqi < 100 ? "text-yellow-600 font-bold" :
                    result.aqi < 150 ? "text-orange-600 font-bold" :
                    result.aqi < 200 ? "text-red-600 font-bold" : "text-purple-700 font-bold"
                  }>
                    {result.aqi}
                  </span>
                }
              </div>
              <div className="mb-2">
                <b>Parameter Udara (OpenWeather):</b>

                <div className="grid grid-cols-3 gap-x-2 gap-y-2 px-2 py-3 justify-center items-center">
                  <div className="grid items-center justify-center">
                    <div className="flex w-full items-center justify-center">
                      <img src={AmmoniaIcon} alt="amonia" width={48} height={48} />
                    </div>
                    <p className="text-sm italic">{result.openweather.list[0].components.nh3} μg/m³</p>
                  </div>

                  <div className="grid items-center justify-center">
                    <div className="flex w-full items-center justify-center">
                      <img src={SO2Icon} alt="so2" width={48} height={48} />
                    </div>
                    <p className="text-sm italic">{result.openweather.list[0].components.so2} μg/m³</p>
                  </div>

                  <div className="grid items-center justify-center">
                    <div className="flex w-full items-center justify-center">
                      <img src={OzoneIcon} alt="o3" width={48} height={48} />
                    </div>
                    <p className="text-sm italic">{result.openweather.list[0].components.so2} μg/m³</p>
                  </div>

                </div>
                
                <details className="my-2">
                  <summary>Tabel Hasil</summary>

                  <table className="mt-2 border bg-gray-50 text-sm rounded">
                    <thead>
                      <tr className="font-semibold">
                        <th className="border px-2 py-1 font-bold">Molekul</th>
                        <th className="border px-2 py-1 font-bold">Nilai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">CO</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.co} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">NO</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.no} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">NO₂</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.no2} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">O₃</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.o3} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">SO₂</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.so2} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">PM2.5</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.pm2_5} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">PM10</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.pm10} μg/m³</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 font-semibold">NH₃</td>
                        <td className="border px-2 py-1">{result.openweather.list[0].components.nh3} μg/m³</td>
                      </tr>
                    </tbody>
                  </table>
                </details>

                
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
