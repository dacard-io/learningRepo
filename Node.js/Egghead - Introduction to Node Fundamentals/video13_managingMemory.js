/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover Node.js memory management, and garbage collection */

/* Start node with "node --trace_gc filename.js" to view garbage collection activity when the script is running.

	They are primarily two operations: Scavenge, and Mark-sweep.

	The memory managed by Node.js is called the heap. And its divided into several different spaces called generations.
	There a few of them, but lets just worry about two of them. The newspace, and the oldspace. Newspace is where objects
	are initally created, and its designed to be small and fast to garbage collect. It helps to keep track of whatever objects
	are still be referenced, and deletes any unreferenced objects.
	

*/