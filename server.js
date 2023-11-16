const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', text);
    response.end('First Node Program\n');
})

server.listen(port, hostname, ()=>{
    console.log(`Server successfully running at http://${hostname} at ${port}`);
})
