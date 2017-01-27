var http = require('http'),
	fs = require('fs'),
	index = fs.readFileSync('index.html');

var server = http.createServer(function (request,response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end(index);
});
server.listen(3000,function(){
	console.log("tá rodando na 3000!");
})
