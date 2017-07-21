/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover objects that are part of all Node apps, namely called globals.
   You know that in Javascript, a global scope is the first scope there is 
*/

// So if you go into the REPL shell and type in "global" You'll get a huge list of properties in your REPL.

// But this is interseting, you can also see any data in the global scope as well. So if you create a variable,
// then you type global, you will seee the variable object inside the global scope like so:
var foo = "This is a test"
global
// You should see foo: 'this is a test' at the bottom

/* Now lets do a more in-depth example of using global objects, the next code below should be a seperate file, but
   I don't think thats necassary right now */

var globalFoo;
exports.setFoo = function(val) { // exports will export the function to whatever application that loads it
	globalFoo = val;
};
exports.returnFoo = function() {
	return globalFoo;
};
// You must use the require statement to load the export statements
var modFoo = require('./globalFoo.js');
modFoo.setFoo(24); // See it uses the previous functions defined in the file [oh here we go]