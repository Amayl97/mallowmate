const {app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 400,
        height: 500,
        transparent:true,
        frame:false,
        alwaysOnTop:true
    });
    win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})