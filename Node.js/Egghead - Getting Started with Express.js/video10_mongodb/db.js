// DB.js contains all database connections and functions. Similar to a base.php
var uri = 'mongodb://localhost:27017/test'

// New code using Mongoose
var mongoose = require('mongoose');
mongoose.connect(uri); // Use mongoose to connect to uri

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // Output an error if there is a problem
db.once('open', function (callback) { // Once its open, perform event
	console.log('Database connected');
});

// Lets define a schema
var userSchema = mongoose.Schema({
	username: String,
	gender: String,
	name: {
		title: String,
		first: String,
		last: String,
		full: String
	},
	location: {
		street: String,
		city: String,
		state: String,
		zip: Number
	}
});
// Export the object User, using the userSchema
exports.User = mongoose.model('User', userSchema);
// FYI, that first argument 'User', mongoose will lowercase it and make it plural to find
// the collection incase you ever come across any undefined errors, so it will use the "users" collection

exports.User.find({}, function (error, users) {
	console.log(users);
});

/* Old rudimentary code
var findUsers = function (db, callback) {
	var cursor = db.collection('users').find();
	cursor.each(function (error, doc) {
		if (doc != null) { // If it find a document, print out information
			console.dir(doc);
		} else {
			callback(); // Else perform callback
		}
	});
}

MongoClient.connect(uri, function (error, db) { // When connection is successful, perform callback
	findUsers(db, function() { // Use findUsers function
		db.close(); // Then when complete, use callback to close connection when complete
	});
});
*/
/* As you can tell, this is very rudimentary and is very verbose(as in, the same operations can
   be expressed in fewer lines) so we are going to use mongoose.js to elegantly use MongoDB */