const http = require('http');
const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Temporary GTM Server is running!\n');
}).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
