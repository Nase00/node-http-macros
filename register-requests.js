const { readFileSync } = require('fs');
const path = require('path');
const { globalShortcut } = require('electron');

const sendRequest = require('./send-request');
const requestsPath = path.join(__dirname, '/requests.json');
const requests = JSON.parse(readFileSync(requestsPath, 'utf8'));

const registerRequests = () => Object.keys(requests).forEach((requestKey) => {
  const ret = globalShortcut.register(requestKey, () => {
    const { options, body } = requests[requestKey];

    sendRequest(options, JSON.stringify(body));
  });

  if (!ret) {
    console.log(`Failed to register ${requestKey}`);
  }

  if (globalShortcut.isRegistered(requestKey)) {
    console.log(`Registered request for ${requestKey}`);
  };
});

module.exports = registerRequests;
