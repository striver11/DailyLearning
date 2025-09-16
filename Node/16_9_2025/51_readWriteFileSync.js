const fs=require('fs')

/*
Node.js allows JavaScript to read and write files on disk, unlike in browsers.

The built-in fs module is used for file operations.

The methods fs.readFileSync() and fs.writeFileSync() are used for synchronous
 file access—meaning the Node.js process waits until these operations complete before executing the next line
*/

//reading data from a file synchronously
const textIn=fs.readFileSync('input.txt','utf-8')
console.log(textIn)

//writing data to a new file synchronously
const content=`Data read from input.txt:${textIn}
Data created :${new Date()}`

fs.writeFileSync('./output.txt',content)
console.log("content created")


/*
If the output file does not exist, Node.js creates it automatically.
Data from input.txt is copied and appended with a timestamp to output.txt
*/


// Why Use Synchronous Read?
// Guarantees immediate availability of file data, blocking further execution until done. Best for scripts, config loading, or quick CLI utilities—not for large files or server code, since it blocks the event loop.

// What Is NonSharedBuffer?
// This refers to a standard Node.js Buffer object not shared with other processes—just a plain data buffer in memory.

