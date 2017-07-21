/* These are video tutorials for Express.js by Egghead, so I'll try to write any notes in here */

/* This video will cover templating engines [cool! I'm going to try Handlebars] */

// Load up express first
var express = require('express');
var app = express(); // Create an instance of express, and call the object "app"
// We are going to add some other dependencies for working with JSON data
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
// Include handlebars and consolidate
var engines = require('consolidate'); // Consilidate provides shims for templating engines that don't support Express (like handlebars)
var bodyParser = require('body-parser');

// Functions for getting the user
function getUserFilePath(username) {
	return path.join(__dirname, 'users', username) + '.json';
}
function getUser(username) {
	var user = JSON.parse(fs.readFileSync(getUserFilePath(username), {encoding: 'utf8'}));
	user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
	_.keys(user.location).forEach(function(key) {
		user.location[key] = _.startCase(user.location[key]);
	});
	return user;
}

app.engine('hbs', engines.handlebars); // Render any hbs extension with Handlebars
app.set('views', './views'); // Set views folder to find hbs files
app.set('view engine', 'hbs'); // Set view engine to handlebars
 
// Add a static file directory
/* below is the basic way, but it only allows for use of one directory. Lets be more specific.
app.use(express.static('images')); */
app.use('/profilepics', express.static('images'));
// Use body parser so any AJAX and Node events are outputted properly on console
app.use(bodyParser.urlencoded({extended: true}));

// Process get request at root
app.get('/', function(request, response) {
	var users = [];
	// Read the files in "users"
	fs.readdir('users', function (err, files) {
		// For each file, perform a function
		files.forEach(function (file) {
			fs.readFile(path.join(__dirname, 'users', file), {encoding: 'utf8'}, function (err, data) {
				var user = JSON.parse(data);
				user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
				users.push(user);
				if (users.length === files.length)
					response.render('index', {users: users});
			});
		});
	});
});

// Now lets create a username page
// The colon denotes a path variable. (Routing)
// Lets use the route handler to send the new handlebars user.hbs page
app.get('/:username', function(request, response) {
	/* Lets expand the username route with HTTP Verbs */
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = getUser(username);
	response.render('user', {
		user: user,
		address: user.location
	}); // Send the username on the username page
});

// Now handle the PUT method
app.put('/:username', function(request, response) {
	/* Lets expand the username route with HTTP Verbs */
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = getUser(username);
	user.location = request.body;
	// .body is the ajax data sent from the save() function in our user.hbs template file 
	saveUser(username, user);
	response.end();
});

// Now handle delete AJAX request
app.delete('/:username', function(request, response) {
	var fp = getUserFilePath(req.params.username);
	fs.unlinkSync(fp); // Delete the file
	res.sendStatus(200);
});

// Create the server
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost:' + server.address().port);
});
