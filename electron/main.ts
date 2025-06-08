import { app, BrowserWindow, ipcMain, Notification } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import axios from 'axios';
import 'dotenv/config'; // Pastikan ini ada di paling atas

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

ipcMain.handle('get-air-quality', async (_event, city, state, country) => {
  // TODO: add response data type
  const openWeatherKey = process.env.OPENWEATHER_API_KEY;
  const iqairKey = process.env.IQAIR_API_KEY;
  
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct`;
  const iqairUrl = `https://api.airvisual.com/v2/nearest_city`;
  const airUrl = `https://api.openweathermap.org/data/2.5/air_pollution`;

  try {
    // 1. Dapatkan koordinat kota dari OpenWeather Geocoding API
    const geoResp = await axios.get(geoUrl, {params: {
      q: `${city},${state},${country}`,
      limit: 1,
      appid: openWeatherKey
    }});

    if (!geoResp.data || geoResp.data.length === 0) {
      return { status: "fail", error: "Lokasi tidak ditemukan" };
    }
    const { lat, lon, name } = geoResp.data[0];

    // 2. Dapatkan AQI dari IQAir
    const iqairResp = await axios.get(iqairUrl, {
      params: {
        lat: lat,
        lon: lon,
        key: iqairKey
      }
    });

    // 3. Dapatkan parameter udara dari OpenWeather
    
    const airResp = await axios.get(airUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: openWeatherKey
      }
    });

    return {
      status: "success",
      location: { lat, lon, name },
      aqi: iqairResp.data?.data?.current?.pollution?.aqius ?? null,
      openweather: airResp.data,
    };
  } catch (error: any) {
    return { status: "fail", error: error.message };
  }
});
