import * as Processor from "./lib/image/index"

const { app, BrowserWindow, screen } = require('electron')
const { ipcMain } = require('electron')
const path = require('path')
// const Img


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


function createWindow ( display, i? ) {
  var processor: Processor.ImgProcessorFactory
  var imageHandler: Processor.IImageProcessor
  processor = new Processor.TestGitProcessor( )
  imageHandler = processor.createProcessor( __dirname )
  console.log('dirname: ', __dirname)
  const win = new BrowserWindow({
    x: display.bounds.x,
    y: display.bounds.y,
    fullscreen: true,
    frame: false,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload'+i+'.js'),
      nodeIntegration: true
    }
  })
  let x: number
  win.loadFile(__dirname + '/index.html')
  ipcMain.on('request'+i, async (event, arg) => {
    console.log(arg) // prints "ping"
    await sleep(5000)
    let src = imageHandler.getNext()
    win.webContents.send("response" + i, {
      success: src
    });
  })
}


app.whenReady().then(() => {

  const displays = screen.getAllDisplays()
  console.log(displays)
  let i = 1
  displays.forEach( display => {
    createWindow( display, i++ )
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      displays.forEach( display => {
        createWindow( display )
      })
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
