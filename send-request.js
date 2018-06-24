const http = require('http');

const sendRequest = (options, body) => {
  options.headers['content-length'] = body.length;

  const request = http.request(options, (response) => {
    console.log(`STATUS: ${response.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    response.setEncoding('utf8');

    response.on('data', (data) => {
      const { status } = JSON.parse(data);

      if (status === 200) {
        console.log('Request sent');
      } else {
        console.error(status);
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
