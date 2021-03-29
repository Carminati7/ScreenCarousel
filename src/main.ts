import * as Processor from "./lib/image/index"

const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const path = require('path')
// const Img

var processor: Processor.ImgProcessorFactory
var imageHandler: Processor.IImageProcessor

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

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
  ipcMain.on('request', async (event, arg) => {
    console.log(arg) // prints "ping"
    await sleep(10000)
    let src = imageHandler.getNext()
    win.webContents.send("response", {
      success: src
    });
  })
}


app.whenReady().then(() => {

  processor = new Processor.TestProcessor( )
  imageHandler = processor.createProcessor( __dirname )

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
