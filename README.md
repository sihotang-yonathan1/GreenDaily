# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Other ref:
https://stackoverflow.com/questions/79562593/electron-vite-react-tailwindcss-v4

Nama Anggota:   
PRISKILA GABRIELA SUPIT	220211060109   
RYAN CHRISTIAN FABIAN RATTU	220211060114  
TYRONE GILCHRIST PAAT	220211060122  
YONATHAN HOT GABE SIHOTANG	220211060127  

# GreenDaily

GreenDaily adalah aplikasi desktop berbasis Electron + React + TypeScript yang membantu pengguna untuk:
- Mengecek kualitas udara (AQI dan parameter udara) berdasarkan lokasi
- Mengatur pengingat (reminder)
- Menghitung konsumsi energi listrik (kalkulator)
- Mendapatkan tips penghematan listrik
- Menyelesaikan daily challenge ramah lingkungan

---

## Fitur Utama

- **Cek Kualitas Udara:**  
  Masukkan kota, provinsi, dan negara untuk mendapatkan data AQI (dari IQAir) dan parameter udara (dari OpenWeather).

- **Reminder:**  
  Atur pengingat aktivitas ramah lingkungan, notifikasi akan muncul sesuai jadwal.

- **Kalkulator Energi:**  
  Hitung konsumsi listrik berdasarkan harga atau perangkat.

- **Tips Penghematan Listrik:**  
  Dapatkan tips sederhana untuk menghemat energi.

- **Daily Challenge:**  
  Tantangan harian untuk hidup lebih hijau.

---

## Stack Teknologi

- **Frontend:** React + TypeScript + TailwindCSS
- **Backend:** Electron (main process)
- **Build Tool:** Vite
- **API:** IQAir (AQI), OpenWeather (parameter udara)
- **Linting:** ESLint

---

## Instalasi & Menjalankan Aplikasi

1. **Clone repository:**
   ```sh
   git clone https://github.com/username/greendaily.git
   cd greendaily
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Buat file `.env` di root folder dan isi dengan API key:**
   ```
   IQAIR_API_KEY=your_iqair_api_key
   OPENWEATHER_API_KEY=your_openweather_api_key
   ```

4. **Jalankan aplikasi:**
   ```sh
   npm run dev
   ```
   atau untuk build production:
   ```sh
   npm run build
   npm run start
   ```

---

## Struktur Folder

```
GreenDaily/
├── electron/           # Main process Electron (main.ts, preload.ts)
├── src/                # Source code React (frontend)
│   ├── app/            # Fitur aplikasi (air-quality-check, reminder, energyCalculator, dll)
│   └── main.tsx        # Entry point React
├── dist/               # Hasil build frontend
├── dist-electron/      # Hasil build Electron
├── .env                # API key (jangan di-commit ke repo publik)
├── package.json
└── README.md
```

---

## Icon
Icon diambil dari flaticon
- <a href="https://www.flaticon.com/free-icons/so2" title="so2 icons">So2 icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/ammonia" title="ammonia icons">Ammonia icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/so2" title="so2 icons">So2 icons created by Freepik - Flaticon</a>

## Kontributor

- PRISKILA GABRIELA SUPIT — 220211060109  
- RYAN CHRISTIAN FABIAN RATTU — 220211060114  
- TYRONE GILCHRIST PAAT — 220211060122  
- YONATHAN HOT GABE SIHOTANG — 220211060127

---

## Referensi

- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [IQAir API](https://www.iqair.com/air-pollution-data-api)
- [OpenWeather API](https://openweathermap.org/api)
- [TailwindCSS](https://tailwindcss.com/)

---

> Untuk pertanyaan atau kontribusi, silakan buka issue atau pull request di repository ini.