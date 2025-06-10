"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  sendReminder: (reminder) => electron.ipcRenderer.send("show-reminder-notification", reminder),
  getAirQuality: (city, state, country) => electron.ipcRenderer.invoke("get-air-quality", city, state, country)
});
