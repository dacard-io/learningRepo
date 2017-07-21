/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover using the Node.js HTTP module */

var http = require('http');
var server = http.createServer(function(request, response) {
	// Now check if URL is root. Then perform condition
	if (request.url === '/') {
		response.writeHead(200, {"Content-Type": "text/html"}); // Write to HTTP response code 200, and the content type
		response.end("This is the root/index page!");
	} else if (request.url === '/otherpage') {
		response.writeHead(200, {"Content-Type": "text/html"}); // Write to HTTP response code 200, and the content type
		response.end("This is the other page!");
		// Remember you can only use response.end once!
		// Now if on other page, test the HTTP method being used
		if (request.method === 'GET') {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end("On the other page using the GET method!");
		} else if (request.method === 'POST') {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end("On the other page using the POST method!");
		}
	}
});

server.listen(3000); // Start server on Port 3000 on this machine