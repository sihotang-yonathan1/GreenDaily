import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './global.css'
import { DashboardLayout } from './app/index.tsx';
import { DailyChallengePage } from './app/dailyChallenge/index.tsx';
import { ReminderPage } from './app/reminder/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />} >
          <Route index element={<DailyChallengePage />}/>
          <Route path='reminder' element={<ReminderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
