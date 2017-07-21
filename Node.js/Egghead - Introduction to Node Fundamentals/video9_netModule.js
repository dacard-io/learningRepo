/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover using the Node.js net module */

// The net module creates an async wrapper for the network
var net = require('net');
var server = net.createServer(function(callback) { // Create a server, and use a callback to output that there is a connection
	console.log('Client connected');
	// Now use event listeners to control its operation
	callback.on('data', function(d) { // Now when 'data' event occurs, fire message
		console.log('Data recieved: ' + d.toString());
	});
	callback.on('end', function() { // When 'end' event occurs, fire disconnect message
		console.log('Client disconnected');
	});
});

// Now start the server
server.listen(3000, function() {
	console.log('Server started');
});

// The 1st argument is the port number you want to listen to data in. The second argument is the port or function to use.
// We used a callback to let us know the server has started. If left blank, it listens to 0.0.0.0 which is all interfaces
// on the current device. Thats it.

/* So when you run the script in node, the server starts. When you access the IP address of your local machine and the port
   number, you recieve data! You can use the browser, or "telnet 3000 localhost" to do this. */