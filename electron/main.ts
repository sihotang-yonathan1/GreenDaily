import { app, BrowserWindow, ipcMain, Notification } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC!, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, '../dist-electron/preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST!, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  win = null;
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('show-reminder-notification', (event, reminder: { id: string; title: string; body: string; dateTime: string }) => {
    const targetDate = new Date(reminder.dateTime);
    const now = new Date();
    const delay = targetDate.getTime() - now.getTime();

    if (delay > 0) {
      console.log(`Menjadwalkan reminder "${reminder.body}" untuk ${targetDate.toLocaleString()} (dalam ${delay / 1000} detik)`);
      setTimeout(() => {
        new Notification({
          title: reminder.title,
          body: reminder.body,
          silent: false,
        }).show();
        console.log(`Notifikasi ditampilkan untuk: "${reminder.body}"`);
      }, delay);
    } else {
      console.warn('Mencoba mengatur reminder di masa lalu atau segera:', reminder);
    }
  });
});

ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../dist-electron/preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`);
  } else {
    childWindow.loadFile(path.join(process.env.DIST!, 'index.html'), { hash: arg });
  }
});
