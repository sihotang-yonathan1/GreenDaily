import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";


import './global.css'

// Dashboard
import { DashboardLayout } from './app/index.tsx';

// DailyChallenge
import { DailyChallengePage } from './app/dailyChallenge/index.tsx';

// Reminder
import { ReminderPage } from './app/reminder/index.tsx';

// Calculator
import { CalculatorLayout } from './app/energyCalculator/layout.tsx';
import { CalculatorByPrice } from './app/energyCalculator/byPrice.tsx';
import { CalculatorByDevice } from './app/energyCalculator/byDevice.tsx';

// AirQualityCheck
import { AirQualityCheck } from './app/air-quality-check/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />} >
          <Route index element={<DailyChallengePage />}/>
          <Route path='reminder' element={<ReminderPage />} />
          <Route path='calculator' element={<CalculatorLayout/>}>
            <Route index element={<CalculatorByPrice />} />
            <Route path="byDevice" element={<CalculatorByDevice />} />
          </Route>
          <Route path='air-quality' element={<AirQualityCheck/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
