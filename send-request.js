const http = require('http');

const sendRequest = (options, body) => {
  const request = http.request(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      const { status } = JSON.parse(data);

      if (status === 200) {
        console.log('Request sent');
      }
    });
  });

  request.on('error', ({ message }) => {
    console.log(`Problem with request: ${message}`);
  });

  if (body) {
    request.write(body);
  }

  request.end();
};

module.exports = sendRequest;
