/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/*
	To start the REPL(Read-Eval-Print-Loop) shell, type in node in the console without any arguments
	and it should start. The REPL shell is an environment to write Node and JS code inside. Pretty
	cool.

	So lets go over what some of the usage is */

var foo = 'name' /* Should return "undefined". Does not mean an error occured when declaring a variable, simply means
					that the function returned no output. */

foo		// Should return 'name' to the REPL shell

/* You can also declare functions in the REPL shell as well. */
var myname = function() { return 'will' } // Should also return "undefined". All declarations return undefined.
myname() // Should output "will" to the REPL shell

// You can also write multi-line functions
var sayHello = function() {
	return "Hello World!";
}

/* You can also while editing a multi-line function use the following commands inside the carrets
	.break - will exit out of the function without saving it
	.clear -  will exit out of the function without saving it
	or CTRL+D/CTRL+C. They all do the same thing
*/

var mistake() {
	.break
// Should return back to the REPL shell
var mistake() {
	.clear

// You can save your REPL session by typing .save and a filename.js to save your session
.save replSession.js
// Then you can load your REPL session by typing .load and a filename.js to load your previously saved session
.load replSession.js

// .exit will exit out of the REPL shell
.exit

// .help will show you any REPL commands
.help