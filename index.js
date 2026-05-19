const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
	if (request.url === '/' && request.method === 'GET') {
		response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		response.end('Hola mundo');
		return;
	}

	response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
	response.end('Not Found');
});

server.listen(port, () => {
	console.log(`Servidor listo en http://localhost:${port}`);
});