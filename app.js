const http = require('http');

http.createServer((req,res) => {
	res.write(" Second testing from CI/CD pipeline 🚀");
	res.end();
}).listen(3000);
