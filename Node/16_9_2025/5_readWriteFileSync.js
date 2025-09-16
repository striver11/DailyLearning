//import fs module

const fs=require('fs')

// Reading data from the file synchronously

const textIn=fs.readFileSync('./input.txt','utf-8')
console.log(textIn) //output:This is sample input text file

// Returns Buffer
const dataBuffer = fs.readFileSync("input.txt");
console.log(dataBuffer)  //output: <Buffer 54 68 69 73 20 69 73 20 73 61 6d 70 6c 65 20 69 6e 70 75 74 20 74 65 78 74 20 66 69 6c 65>

// Returns String
const dataString = fs.readFileSync("input.txt", { encoding: "utf8" });
console.log(dataString) //output: This is sample input text file

// Custom flag (rarely needed)
const dataBufferWithFlag = fs.readFileSync("input.txt", { flag: "r" });
console.log(dataBufferWithFlag) //ouput:<Buffer 54 68 69 73 20 69 73 20 73 61 6d 70 6c 65 20 69 6e 70 75 74 20 74 65 78 74 20 66 69 6c 65>