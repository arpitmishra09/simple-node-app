const http = require('http');
const app = require('../index');

// Simple smoke test: start the server and check response
const server = app.listen(0, () => {
  const port = server.address().port;
  http.get({ hostname: '127.0.0.1', port: port, path: '/', agent: false }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const obj = JSON.parse(data);
        if (obj.message && obj.message.includes('Hello')) {
          console.log('TEST PASSED');
          server.close();
          process.exit(0);
        } else {
          console.error('TEST FAILED - unexpected response:', data);
          server.close();
          process.exit(2);
        }
      } catch (e) {
        console.error('TEST FAILED - invalid json:', e);
        server.close();
        process.exit(2);
      }
    });
  }).on('error', (err) => {
    console.error('TEST FAILED - request error:', err);
    server.close();
    process.exit(2);
  });
});
