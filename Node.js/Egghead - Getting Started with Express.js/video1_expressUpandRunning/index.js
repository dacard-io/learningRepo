/* These are video tutorials for Express.js by Egghead, so I'll try to write any notes in here */

/* This video will cover setting up Express.js with node, and basic usage */

// Load up express first
var express = require('express');
var app = express(); // Create an instance of express, and call the object "app"

app.get('/', function (request, response) { // .get is for express. If app object gets an HTTP request to the root path, perform callback
	response.send('Hello, world!'); // Send response to page
});
// Now check if app object HTTP request is at the url otherpage
app.get('/otherpage', function (request, response) {
	response.send('This is the other page')
});

/* app.listen(3000); // Start server, listen on port 3000 */
// Above is the normal way to start a server, but lets make it more intuitive
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost:' + server.address().port);
}); // Create a server variable to hold the server, and create a callback to when execution begins to output information