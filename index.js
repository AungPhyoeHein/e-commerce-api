const http = require('http');
const app = require('./app.js');
const {port} = require("./configs/keys.js")
require('dotenv').config();
console.clear();



// create server
console.log('[+] Trying to create server...');
const server = http.createServer(app);

console.log('[+] Trying to start server...');

server.listen(port, () => {
    return console.log(`[+] Server is running port [${port}]...`)
})