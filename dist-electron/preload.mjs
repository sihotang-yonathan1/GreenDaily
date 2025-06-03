"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  sendReminder: (reminder) => electron.ipcRenderer.send("show-reminder-notification", reminder)
});
