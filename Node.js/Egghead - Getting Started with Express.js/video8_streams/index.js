/* These are video tutorials for Express.js by Egghead, so I'll try to write any notes in here */

/* In this tutorial, I will cover ways to organize routes (yessss how can this get any better) */

// Load up express first
var express = require('express');
var app = express(); // Create an instance of express, and call the object "app"
// We are going to add some other dependencies for working with JSON data
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
// Play with JSON Stream module to expirement more with streams
var JSONStream = require('JSONStream');
// Include handlebars and consolidate
var engines = require('consolidate'); // Consilidate provides shims for templating engines that don't support Express (like handlebars)
var bodyParser = require('body-parser');

// And in this tutorial, lets move all the helper functions to a helpers.js file
//var helpers = require('./helpers'); Don't need helpers for this tutorial
// To use a helper function, make sure its setup propertly, and use helpers.[function_name]. Thats it!

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

// Lets initiate a download
app.get('*.json', function (request, response) {
	response.download('./users/' + request.path); // Pass in the path to the download
	// So anytime a route of any string and a .json ending, download the json file (WAAAA THIS IS AWESOME)

	// You can also give a custom file name to the download by adding a third argument
	// response.download('./users/' + request.path, 'virus.exe');
	// So when the route is initiated, the user will download the json file, but it will take on the name 'virus.exe'
});
// Lets initiate when /data/:username is visited, output JSON data (useful for creating an API server)
app.get('/data/:username', function (request, response) {
	var username = request.params.username;
	// Remove blocking function helpers.getUser() and replace it with streams
	var readable = fs.createReadStream('./users/' + username + '.json');
	// Pipe directly to response object, make the response object writable, so you will see the output on a screen
	readable.pipe(response);
	/* Old blocking function
	var user = helpers.getUser(username); // Notice how we use the helper functions (oh man I totally do)
	response.json(user); */
});

// Lets create a new route
app.get('/users/by/:gender', function (request, response) {
	var gender = request.params.gender;
	var readable = fs.createReadStream('users.json');
	readable.pipe(JSONStream.parse('*', function (user) { // JSONStream has uses a callback for each object it iterates through found in JSON file
		if (user.gender === gender) return user.name;  // If user.gender equals route, return the user
		// Only return the name of the user, not all the data associated with user
	})) 
	.pipe(JSONStream.stringify('[\n ', ',\n ', '\n]\n')) 
	.pipe(response); 
	// Parse all JSON data using JSONStream from readable
	// Pipe to JSONStream to format the JSON data pulled from the callback
	// Pipe output to response
});

app.get('/error/:username', function(request, response) {
	// Output 404 error
	//response.send('404 Error! - ' + request.params.username + ' not found!' );

	//Lets make it a little more intuitive by sending a response status of 404 as well!
	response.status(404).send('404 Error! - ' + request.params.username + ' not found!' );

});

// Define how app handles username routes using username.js!
var userRouter = require('./username'); // Import router
app.use('/:username', userRouter);

/* Okay so to be clear, the code below works, but we are going to be adding username routes to a file,
	but I'll keep the code here so you can refer to it.
// Lets organize all these routes to /:username with app.route() method
app.route('/:username')
.all(function (request, response, next) {
	console.log(request.method, 'for', request.params.username);
	next();
}).get(helpers.verifyUser, function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = helpers.getUser(username);
	response.render('user', {
		user: user,
		address: user.location
	}); // Send the username on the username page
}).put(function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = helpers.getUser(username);
	user.location = request.body;
	// .body is the ajax data sent from the save() function in our user.hbs template file 
	helpers.saveUser(username, user);
	response.end();
}).delete(function(request, response) {
	var fp = helpers.getUserFilePath(request.params.username);
	fs.unlinkSync(fp); // Delete the file
	res.sendStatus(200);
});
*/
// Notice how its all chained together, and you removed the route handler from the child methods. So nice

// Create the server
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost:' + server.address().port);
});
