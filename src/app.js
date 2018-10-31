const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/html');
  res.end('Hello World!');
})

server.listen(conf.port, conf.hostname, () => {
  const ip = `http://${conf.hostname}:${conf.port}/`;
  console.info(`Server started at ${chalk.green(ip)}`);
})