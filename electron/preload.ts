import { contextBridge, ipcRenderer } from 'electron';

export interface ElectronAPI {
  sendReminder: (reminder: { id: string; title: string; body: string; dateTime: string }) => void;
  getAirQuality: (city: string, state: string, country: string) => Promise<any>;
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
