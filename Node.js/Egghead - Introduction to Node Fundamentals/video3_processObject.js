/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover the process object and it's properties */

// Lets get the global node process
global.process // Should return global information about both Node, and your current REPL shell session
// To get more specific with what property you want from process, type in [object].process.attributeName
global.process.version // Should output your current node version
global.process.versions // Should output the versions of node dependencies in the node stack

process.cwd() // Should return the current working directory in your REPL shell

// We can also use the process object to write to stdin and stdout
process.stdout.write("Hello world\n") // Should output to standard out -> "Hello world!"

/* We can also use the process object to do things with arguments.

   So I created a file called video3_arguments.js that outputs each argument.

   To run a javascript file in node, literally type in "node filename.js".

   In this example, if we add any arguments while running the file, it will detect it and output it to the screen
   node filename.js argument1 Hello World -> Output should be:

   0: node
   1: /Users/video3_arguments.js
   2: argument1
   3: Hello
   4: World
*/

/* Lets demonstrate the process.nextTick function */
console.log("start");
process.nextTick(function() {
	console.log('nextTick callback');
});
console.log("scheduled");

/* Output should be:
	start
	scheduled
	nextTick callback

	Notice the order of the output. Scheduled printed out before nextTick.
	The reason is why nextTick runs later, is because nextTick doesn't do anything
	until the next pass through. Similar to a timeout function

	setTimeout(function(){}, 0); // The difference between setTimout and 
	nextTick() is because setTimeout depends on your system, while nextTick
	has no I/O overhead whatsoever. So use nextTick
*/

