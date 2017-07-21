/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/*
	We're going to be covering callbacks (whatever that is) using the REPL shell. */

// Create a simple function
var welcomeMsg = function() {
	console.log("Welcome to Node.js!");
}
// Now create a function that uses the first argument as a callback to another function [oh]
var start = function(callback) {
	callback(); // [oh okay I get it.] 
}

start(welcomeMsg); // Should output "Welcome to Node.js!"

/* Why would you do this? The reason why, is because this where Node.js gets its asynchronous property.
   Because when your making a callback, regardless of whether the welcomeMsg function fails or not, start()
   will still run anyway [alright alright] */

// A more in-depth example of using callbacks
var look = function(dir) {
	if (dir === 'west') {
		console.log("There is a small mailbox here.");
	}
	if (dir === 'east') {
		console.log("You are standing next to a white house.");
	}
}
var walk = function(dir) {
	if (dir === 'west') {
		console.log("It is very dark, you are likely to be eaten by a grue!");
	}
	if (dir === 'south') {
		console.log("You are standing on the edge of a deep chasm.");
	}
}
var getInput = function(param, callback) {
	callback(param);
}

getInput('west', look); // Should output -> There is a small mailbox here
getInput('east', look); // Should output -> You are standing next to a white house
getInput('west', walk); // Should output -> It is very dark, you are likely to be eaten by a grue!