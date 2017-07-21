// This is the file that contains username router functions

// Require dependencies
var express = require('express');
var fs = require('fs');
var helpers = require('./helpers'); // Require helpers!

// Use Users export from db.js
var User = require('./db.js').user;

/* If you want your app to stop outputting stack trace errors to the browser (Security weakness
   because it shows all the paths in your server where the error occured)run node using the following:
   Command in console: NODE_ENV=production node index.js - So now when there is an error on your
   app, its only going to output "Internal Server Error"! EXTREMELY IMPORTANT */

/*
var router = express.Router(); // Create an instance of a router for username use only
*/
/* Okay this part is odd, but declaring a router by itself will create a path.join error. To eleviate
   this, you have to pass in an options object with mergeParams to true */
var router = express.Router({
	mergeParams: true
});
/* Lets use a new scenario instead of using app.all(). You can use the "use" method 
*/
router.use(function(request, response, next) { //Omit the path
	console.log(request.method, 'for', request.params.username, ' at ' + request.path);
	// Output information whenever any router is initialized
	next();
	// Great for debugging!
});
/*
router.all('/', function (request, response, next) {
	console.log(request.method, 'for', request.params.username);
	next();
})
*/

// Okay so I have to fix this later, but the findOne and findOneAndUpdate methods are depracated

/* Remove verifyUser call so we can test the error-handling middleware above */
router.get('/', function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
		User.findOne({username: username}, function(err, user) {
			response.render('user', {
			user: user,
			address: user.location
		}); // Send the username on the username page
	}); // Find only one matching object (great on light resource usage)
});
router.put('/', function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	
	User.findOneAndUpdate({username: username}, {location: request.body}, function (err, user) {
		// 1st argu,ment is the username, the object to write to, and the callback
		response.end();
	});
})
router.delete('/', function(request, response) {
	var fp = helpers.getUserFilePath(request.params.username);
	fs.unlinkSync(fp); // Delete the file
	res.sendStatus(200);
});
// Lets create a router to send the user to an edit page when clicked (look at the link in the users template)
router.get('/edit', function(request, response) {
	response.send('You want to edit ' + request.params.username + '?');
});
// And finally, lets cover error-handling using middleware. Its actually extremely simple
// Declare the router.use method, but include 4 arguments in the callback. The first one being the error! Thats it!
router.use(function (error, request, response, next) {
	// Anytime an error occurs, activate this router!!!
	console.error(error.stack); // Log out the stack trace
	response.status(500).send('Something broke!');
}); // Remember to put any error checking handlers below handlers you want to error-check

/* You probably are wondering why the paths are just a slash. The reason for this is because you are
	exporting the routers, and you define the router in the index! */
module.exports = router;
