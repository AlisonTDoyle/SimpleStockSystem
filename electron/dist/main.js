"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
// Properties
var win;
// Listeners
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
// Methods
function createWindow() {
    // Format window
    win = new electron_1.BrowserWindow();
    win.maximize();
    // Load angular app into window
    win.loadURL(url.format({
        pathname: path.join(__dirname, "./../../dist/simple-stock-system/browser/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
    // Show dev tools/inspect element
    win.webContents.openDevTools();
    // How to handle application closing
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map