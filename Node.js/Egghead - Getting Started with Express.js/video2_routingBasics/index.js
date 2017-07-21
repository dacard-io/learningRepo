/* These are video tutorials for Express.js by Egghead, so I'll try to write any notes in here */

/* This video will cover basic routing */

// Load up express first
var express = require('express');
var app = express(); // Create an instance of express, and call the object "app"
// We are going to add some other dependencies for working with JSON data
var fs = require('fs');
var _ = require('lodash');

// Create an empty array for storing user data
var users = [];

// use fs to read json data
fs.readFile('users.json', {encoding: 'utf8'}, function(err, data) {
	if (err) throw err // If error detected, throw error

	// Parse each user in the JSON file
	JSON.parse(data).forEach(function(user) {
		user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
		users.push(user); // Push data into array
	});
});

// Process get request at root
app.get('/', function(request, response) {
	// response.send(JSON.stringify(users, null, 2)); can be used to test if JSON is being given in response
	var buffer = ''; // Create an empty string called buffer

	users.forEach(function(user) {
		buffer += '<a href="/' + user.username + '">' + user.name.full + '</a><br>'
	}); // Create a proper list of users with their names as links, and add to buffer
	response.send(buffer); // Output the buffer
});

// Another way to define routes is to use regular expressions
app.get(/big.*/, function (request, response, next) { // Anything that starts with big followed by any characters, sends a different response
	console.log('BIG USER ADDED (whatever that means)');
	next(); // The next callback will be passed in, to say that when this routehandler is complete, proceed to next route handler
});

// Now lets create a username page
// The colon denotes a path variable. (Routing)
app.get('/:username', function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	response.send(username); // Send the username on the username page
});

/* The following code below won't work, because the order of routes needs to be thought of. If the previous route executes
   first, it will never reach this area, so duplicate this code and post it above the /:username route */
// Another way to define routes is to use regular expressions
app.get(/big.*/, function (request, response, next) { // Anything that starts with big followed by any characters, sends a different response
	console.log('BIG USER ADDED (whatever that means)');
	next();
});

// Create the server
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost:' + server.address().port);
});
