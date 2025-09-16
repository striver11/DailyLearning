//callback hell with error handling
//ENOENT = Error NO ENTry → means the file or directory doesn’t exist at the given path


const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: file1.txt`);
    } else {
      console.error(`Error reading file1.txt:`, err);
    }
    return;  // stop further execution if error
  }
  console.log('File 1 contents:', data1);

  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`File not found: file2.txt`);
      } else {
        console.error(`Error reading file2.txt:`, err);
      }
      return;  // stop here if error
    }
    console.log('File 2 contents:', data2);

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.error(`File not found: file3.txt`);
        } else {
          console.error(`Error reading file3.txt:`, err);
        }
        return;  // stop here if error
      }
      console.log('File 3 contents:', data3);
    });
  });
});


/*
output: this is the result i will get when i comment the "return" in above code

PS C:\DailyLearning\Node\16_9_2025> node .\61_callbackHell.js
File not found: file1.txt
File 1 contents: undefined
File not found: file2.txt
File 2 contents: undefined
File not found: file3.txt
File 3 contents: undefined
*/

/*
Summary
Your error differentiation is good and helpful for debugging.

Make sure to return after handling errors to avoid unintended continuation and possibly accessing undefined data.

For better code structure and to avoid the nested callbacks, consider using Promises or async/await in the
 future to keep the code cleaner and easier to maintain.

This approach improves reliability and readability but still bears the "callback hell" nesting. Moving to promises or async/await would be
 the recommended next step for more scalable code.
 */



// Here is your callback-based nested file reading code converted to use Promises and async/await, 
// which flattens the structure and makes it cleaner and easier to maintain:
const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    console.log('File 1 contents:', data1);

    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('File 2 contents:', data2);

    const data3 = await fs.readFile('file3.txt', 'utf8');
    console.log('File 3 contents:', data3);

  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${err.path}`);
    } else {
      console.error('Error reading file:', err);
    }
  }
}

readFiles();

/*
Benefits:
Handles errors cleanly in one place via try/catch.

Stops reading further files upon error.

Avoids deeply nested callbacks ("callback hell").

Easier to read and maintain.

You can run this directly with Node.js (v10+ supports fs.promises) for cleaner asynchronous file handling.Here is your callback-based nested file reading code converted to use Promises and async/await, 
which flattens the structure and makes it cleaner and easier to maintain

*/



//Here is your nested file reading code rewritten using Promises directly without async/await:
const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf8')
  .then(data1 => {
    console.log('File 1 contents:', data1);
    return fs.readFile('file2.txt', 'utf8');
  })
  .then(data2 => {
    console.log('File 2 contents:', data2);
    return fs.readFile('file3.txt', 'utf8');
  })
  .then(data3 => {
    console.log('File 3 contents:', data3);
  })
  .catch(err => {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${err.path}`);
    } else {
      console.error('Error reading file:', err);
    }
  });


/*
  Explanation:
Each then returns a promise to read the next file.

Errors from any read operation are caught in the catch block.

This flattens the callback pyramid into a linear chain of promises.

This is the Promises-based alternative to nested callbacks.
*/