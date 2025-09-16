const fs=require('fs')
const path=require('path')
/*
Improved Version of the Code
Use const for immutable references.

Add error handling with try/catch blocks for robustness.

Use path module for reliable cross-platform path handling.

Modularize logic for maintainability and readability.
*/

try{

    const inputFile=path.join(__dirname,'input2.txt')
    const outputFile=path.join(__dirname,'output2.txt')

    //Read input file sysnchronously
    const textIn=fs.readFileSync(inputFile,'utf-8')
    console.log("Input File content :",textIn)

    //prepare output content with current timestamp
    const content=`Data read from input2.txt:${textIn}
    Date created :${new Date()} \n
    Date in ISOString format:${new Date().toISOString()}`

    //write to ouput file synchronously
    fs.writeFileSync(outputFile,content)
    console.log("content successfully written to output2.txt")


}catch(err){

    console.log("File Operation error:",err.message) //File Operation error: ENOENT: no such file or directory, open 'C:\DailyLearning\Node\16_9_2025\input2.txt'
}


// output:
// Input File content : This is text from the file input2.txt 
// content successfully written to output2.txt


/*
Where, When, and Why to Use Synchronous File Operations
Where: Small CLI utilities, single-use scripts, setup/configuration scripts, education or demonstration environments.

When: File I/O is short and predictable, and the app isn’t performance-critical, or blocking other users/work.

Why: Simplicity—code runs in predictable, stepwise order, making reasoning, debugging, and demonstration easy.

Where Should You Avoid Synchronous File Operations
Large files: Reading/writing big files synchronously will block the event loop and make Node.js unresponsive, especially in servers or APIs.

Web/server apps: Async methods are preferred to avoid blocking requests.

Concurrent work: Tools needing parallel I/O, performance, or user responsiveness will run poorly if synchronous methods are used.

Security Concerns
File paths: Always validate and sanitize paths if user input is involved; avoid path traversal vulnerabilities.

Blocking: Synchronous operations can hang the process, creating denial-of-service scenarios in responsive apps.

Overwriting: fs.writeFileSync will overwrite files without warning—add checks if this is an issue.

Exposure: Avoid leaking sensitive file data in logs or outputs.
*/