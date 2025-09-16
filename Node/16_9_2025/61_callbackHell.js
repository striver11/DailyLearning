//callback hell this code below will block if there is any error in the code or even the 1st file is not found


/*
Callback hell occurs when multiple asynchronous operations are nested inside each other,
 resulting in deeply indented, hard-to-read, and difficult-to-maintain code. 
It usually looks like a pyramid or triangle of nested callback functions.
*/

const fs = require('fs')

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err
  console.log('File 1 contents:', data1)

  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err
    console.log('File 2 contents:', data2)

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) throw err
      console.log('File 3 contents:', data3)

      // Further nested callbacks continue...
    })
  })
})

/*

output:
C:\DailyLearning\Node\16_9_2025\61_callbackHell.js:4
  if (err) throw err
           ^

[Error: ENOENT: no such file or directory, open 'C:\DailyLearning\Node\16_9_2025\file1.txt'] {       
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\DailyLearning\\Node\\16_9_2025\\file1.txt'
}
  */



// How to Resolve Callback Hell
// 1. Use Promises
//Rewrite the asynchronous functions to return promises, flattening the structure:
const fs = require('fs').promises

fs.readFile('file1.txt', 'utf8')
  .then(data1 => {
    console.log('File 1 contents:', data1)
    return fs.readFile('file2.txt', 'utf8')
  })
  .then(data2 => {
    console.log('File 2 contents:', data2)
    return fs.readFile('file3.txt', 'utf8')
  })
  .then(data3 => {
    console.log('File 3 contents:', data3)
  })
  .catch(err => {
    console.error(err)
  })
//This avoids deep nesting and improves readability.

// 2. Use Async/Await (ES8)
// Even cleaner and more readable syntax using async functions and await:
const fs = require('fs').promises

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8')
    console.log('File 1 contents:', data1)

    const data2 = await fs.readFile('file2.txt', 'utf8')
    console.log('File 2 contents:', data2)

    const data3 = await fs.readFile('file3.txt', 'utf8')
    console.log('File 3 contents:', data3)
  } catch (err) {
    console.error(err)
  }
}

readFiles()

// async/await provides a more synchronous-looking and intuitive control flow, 
// making asynchronous code easier to write and maintain.


/*
Summary
Problem	        Solution	                Benefits
Callback Hell	Promises	                Flattens nested callbacks
Callback Hell	Async/Await	                Cleaner, synchronous style syntax
Callback Hell	Modularizing functions	     Extracting callback logic to named functions
*/