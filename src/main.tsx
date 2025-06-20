import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";


import './global.css'

// Dashboard
import { DashboardLayout } from './app/index.tsx';

// DailyChallenge
import { DailyChallengePage } from './app/dailyChallenge/index.tsx';

// Reminder
import { ReminderLayout } from "./app/reminder/layout.tsx";

// Calculator
import { CalculatorLayout } from './app/energyCalculator/layout.tsx';
import { CalculatorByPrice } from './app/energyCalculator/tabs/byPrice.tsx';
import { CalculatorByDevice } from './app/energyCalculator/tabs/byDevice.tsx';

// AirQualityCheck
import { AirQualityCheck } from './app/air-quality-check/index.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<DashboardLayout />} >
          <Route index element={<DailyChallengePage />}/>
          <Route path='reminder' element={<ReminderLayout />} />
          <Route path='calculator' element={<CalculatorLayout/>}>
            <Route index element={<CalculatorByPrice />} />
            <Route path="byDevice" element={<CalculatorByDevice />} />
          </Route>
          <Route path='air-quality' element={<AirQualityCheck/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
