import { app, BrowserWindow } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'
let mainWindow
function createMainWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences: {
    nodeIntegration: true
  } })

  // if(isDevelopment){
  //   mainWindow.webContents.openDevTools()
  // }
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL(`file://${__dirname}/../../index.html`)
  // mainWindow.loadURL(`http://localhost:8080/`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.on('ready', async () => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}