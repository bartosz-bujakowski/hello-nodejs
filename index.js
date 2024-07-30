const http = require('http');

const hostname = '127.0.0.1';
const port = 3004;

const server = http.createServer((req, res) => {
	    if (req.method === 'GET' && req.url === '/ping') {
		            res.statusCode = 200;
		            res.setHeader('Content-Type', 'text/plain');
		            res.end('pong');
		        } else {
				        res.statusCode = 404;
				        res.setHeader('Content-Type', 'text/plain');
				        res.end('Not Found');
				    }
});

server.listen(port, hostname, () => {
	    console.log(`Server running at http://${hostname}:${port}/`);
});
