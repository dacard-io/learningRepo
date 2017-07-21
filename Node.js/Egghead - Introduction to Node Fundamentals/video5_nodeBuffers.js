/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover Node.js buffers */

// Lets load an external text file
fs.readFile('video5_textFile.txt', function(err, data){ 
	console.log(data); 
}); // Use a callback incase the file didn't load properly
/* When you type this in, it will read the file, but you'll get the raw buffer which appears like so:
<Buffer 48 65 6c 6c 6f 20 49 27 6d 20 63 6f 6e 74 65 6e 74 20 69 6e 20 61 20 74 65 78 74 20 66 69 6c 65>

	Great so we got some data, but its completely unreadable. ot very useful. So in order to get readable data,
	we are going to load the file again, but using the .toString() method for the callback to get properly formatted
	data.
*/

fs.readFile('video5_textFile.txt', function(err, data){ 
	console.log(data.toString()); 
}); // Now it should output the content of the text file: Hello I'm content in a text file

// Theres another way to do this as well
fs.readFile('video5_textFile.txt', 'utf8', function(err, data){ // Noticed we added an optional argument to read the file in a certain encoding(in this case utf8)
	console.log(data); 
}); // And you get the file outputed as well [I like this method more] -> Hello I'm content in a text file

// There is a length method for checking the length of a string
str = '\u0048\u0065\u006c\u066c\u006f' //This is actually the encoding for the word "Hello"
str.length // Should return 5, since the encoding converts to a single character.
Buffer.byteLength(str, 'utf8') // You can also get the number of bytes in a string Should output 5

// Now lets go over the buffer.write method
buf = new Buffer(5); // Create a buffer 5 bytes in length
// Should output <Buffer 00 20 00 00 00>
buf.write('hello world'); // Should return -> 5
buf.toString(); // Should output -> 'hello' - Noticed that it only had room to store hello, the rest of the data was dropped

// You can also use the write method to write data at an offset
buf.write('hello', 2); // Should output 3
buf.toString(); // SHould output -> hehel
buf.write('xxxx', 2, 1); // There is a third argument, that specifies the length of the data to be written in bytes
buf.toString(); // Should output -> 'hexel'
// There is a final fourth argument that specifies to encoding to write in, its default at utf8

/* There are several ways to compare quality of buffers, so create some buffers to test this out */
var buf1 = new Buffer('1234');
var buf2 = new Buffer('0123');
var buf3 = new Buffer('1234');
buf1.compare(buf2); // Should return 1, meaning they are not the same
buf1.compare(buf3); // Should return 0, meaning they are not matched
buf1.equals(buf2); // Should return false, instead of an integer

// We can also sort buffers
var arr = [buf1, buf2];
arr.sort(Buffer.compare) // it should then sort the array in order
buf.toJSON() // Converts the buffer into a JSON object

// Now lets cover the slice method
buf1 = new Buffer('Hello World')
buf2 = buf1.slice(0, 3)
buf2.toString() // Should output -> 'Hel'

// A quick look at the referential properties of buf2
buf2.write('xxx');
buf2.toString(); // Should output -> 'xxx'
buf1.toString(); // Should output -> 'xxxlo World!' - Notice that buf2 is simply a reference to buf1, and the changes done to ref2 actually applied to buf1
