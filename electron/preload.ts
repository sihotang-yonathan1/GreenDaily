import { contextBridge, ipcRenderer } from 'electron';

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


export interface ElectronAPI {
  sendReminder: (reminder: { id: string; title: string; body: string; dateTime: string }) => void;
  getAirQuality: (city: string, state: string, country: string) => Promise<AirQualityAPIResult>;
}

contextBridge.exposeInMainWorld('electronAPI', {
  sendReminder: (reminder: { id: string; title: string; body: string; dateTime: string }) =>
    ipcRenderer.send('show-reminder-notification', reminder),
  getAirQuality: (city: string, state: string, country: string) =>
    ipcRenderer.invoke('get-air-quality', city, state, country),
});

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
