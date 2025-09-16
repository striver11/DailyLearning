const fs=require('fs')

//synchronous file reading
const data=fs.readFileSync('input.txt','utf-8')

console.log(data)

console.log("finished synchronous file reading")

const asyncData=fs.readFile('input.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

console.log("started asynchronous file reading")

async function readFileAsync(){
    try{
        const data=await fs.readFile('input.txt','utf-8')
        console.log(data)
        console.log('finished async file reading')
    }catch(err){
        console.log("Error :",err.message)
    }
}

readFileAsync()


/*
This async/await approach avoids deep nesting and makes flow clearer.

Where, When and Why to Use Synchronous or Asynchronous Code
Synchronous code:

Simple scripts, one-off CLI tools, small data loads.

Asynchronous code:

Network servers, web APIs, any app needing high concurrency or non-blocking user responsiveness — always preferred for
 Node.js applications serving many users.

Where Should You Not Use Synchronous Code
In any production/back-end application potentially accessed by multiple users simultaneously.

For large file, network, database, or I/O operations that can potentially block the single event loop.

Security Concerns
Not blocking itself, but deep callback nesting can make it easy to miss errors, mishandle data, or expose bugs.

Async code may be harder to audit for data leaks if error handling is missing or callbacks are not correctly structured.
*/