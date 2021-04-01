const { contextBridge, ipcRenderer } = require('electron');
import { PreloadCounter } from './preloadCounter'
console.log(PreloadCounter.getInstance().getIndex())
contextBridge.exposeInMainWorld('api', {
  request: (data) => ipcRenderer.send("request1", {
    data
  }),
  onResponse: (fn) => {
    // Deliberately strip event as it includes `sender`
    ipcRenderer.on('response1', (event, ...args) => fn(...args));
  }
})
