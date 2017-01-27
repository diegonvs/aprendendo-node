'use strict';

var date = (new Date()).toJSON();

const http = require('http');
const SUCCESS = {
	version: '1.0'
	, name: 'Dale APIzona'
	, returned_at: date
};
const ERROR = {
	message: "Deu ruimzao!"
};

http.createServer(function(req, res){
	if (req.url === '/api/v1') {
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCCESS));		
	} else {
		res.writeHead(404,{'Content-Type': 'application/json'});
		res.write(JSON.stringify(ERROR));
	}
	res.end();
}).listen(4000,function () {
	console.log("tá rodando na 4000!");
});



