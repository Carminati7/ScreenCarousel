import * as Processor from "./lib/image/index"

const { app, BrowserWindow } = require('electron')
const path = require('path')
// const Img

var processor: Processor.ImgProcessor

function createWindow () {
  console.log('dirname: ', __dirname)
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  let x: number
  win.loadFile(__dirname + '/index.html')
}

app.whenReady().then(() => {

  processor = new Processor.TestProcessor()
  let imageHandler = processor.createProcessor()
  console.log( imageHandler.getNext() )
  
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
