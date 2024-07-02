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
      win.webContents.setZoomFactor(0.8);
      win.show();
      loadingWindow.close();
    });
  }
  
  app.on('ready', createWindow)