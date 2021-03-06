const { contextBridge, ipcRenderer } = require('electron');
import { PreloadCounter } from './preloadCounter'
console.log(PreloadCounter.getInstance().getIndex())
contextBridge.exposeInMainWorld('api', {
  request: (data) => ipcRenderer.send("request", {
    data
  }),
  onResponse: (fn) => {
    // Deliberately strip event as it includes `sender`
    ipcRenderer.on('response', (event, ...args) => fn(...args));
  }
})
