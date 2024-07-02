const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  // Create the browser window.

  var loadingWindow = new BrowserWindow({
      width:          200,
      height:         200,
      transparent:    (process.platform != 'linux'), // Transparency doesn't work on Linux.
      resizable:      false,
      frame:          false,
      alwaysOnTop:    true,
      hasShadow:      false,
      title:          "Loading..."
  });

  loadingWindow.loadFile("loading.html");

  win = new BrowserWindow({width: 1200, height: 800, show:false});
  win.removeMenu();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.once('did-finish-load', function ()
  {
    win.show();
    loadingWindow.close();
    win.webContents.setZoomFactor(0.8);
    
   // win.webContents.setVisualZoomLevelLimits(0.8, 2.00).then(()=>{});
    win.webContents.on("zoom-changed", (event, zoomDirection) => {
      const currentZoom = win.webContents.getZoomFactor();

      if (zoomDirection === "in") {
          win.webContents.zoomFactor = currentZoom + 0.05;
      }
      if (zoomDirection === "out") {
        if(currentZoom - 0.05 > 0.00)
        {
            win.webContents.zoomFactor = currentZoom - 0.05;
        }
      }
    });
    //win.webContents.openDevTools();
  });
}

app.on('ready', createWindow);