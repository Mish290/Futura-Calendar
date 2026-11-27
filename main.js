const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Nessun menu (File/Edit/View...): l'app si presenta come un programma pulito.
Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'build', 'icon.ico'),
    title: 'Futura - Calendar',
    backgroundColor: '#000000',
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.webContents.on('before-input-event', (event, input) => {
    if (input.control && ['+', '-', '0'].includes(input.key)) event.preventDefault();
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
