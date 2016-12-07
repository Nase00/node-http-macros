const sendRequest = require('./send-request');
const { readFileSync } = require('fs');
const path = require('path');

const requestsPath = path.join(__dirname, '/requests.json');

const requests = JSON.parse(readFileSync(requestsPath, 'utf8'));

const handleKeyPress = (macroKey) => {
  if (!requests[macroKey]) {
    console.log('No request found');

    return;
  }

  const { options, body } = requests[macroKey];

  sendRequest(options, JSON.stringify(body));
};

module.exports = handleKeyPress;
