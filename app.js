const http = require('http');

http.createServer((req,res) => {
	res.write(" GREEN VERSION 🟢" );
	res.end();
}).listen(3000);
