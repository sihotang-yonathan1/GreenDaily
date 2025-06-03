import { contextBridge, ipcRenderer } from 'electron';

export interface ElectronAPI {
  sendReminder: (reminder: { id: string; title: string; body: string; dateTime: string }) => void;
}

contextBridge.exposeInMainWorld('electronAPI', {
  sendReminder: (reminder: { id: string; title: string; body: string; dateTime: string }) =>
    ipcRenderer.send('show-reminder-notification', reminder),
});

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
