const { app } = require('electron');

const registerRequests = require('./register-requests');

app.on('ready', registerRequests);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
