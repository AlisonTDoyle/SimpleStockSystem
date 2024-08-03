// Imports
import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

// Properties
let win: BrowserWindow | null

// Listeners
app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

// Methods
function createWindow() {
    // Format window
    win = new BrowserWindow();
    win.maximize();

    // Load angular app into window
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `./../../dist/simple-stock-system/browser/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    )

    // Show dev tools/inspect element
    win.webContents.openDevTools()

    // How to handle application closing
    win.on('closed', () => {
        win = null
    })
}