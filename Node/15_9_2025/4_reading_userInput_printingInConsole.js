// Printing message to terminal
console.log("Hello from Node.js")
console.log("This is my first Node.js app")

// Reading user input
const readline=require("readline")

// create interface once with exlplicit config

const r1=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

//prompt for uesr's input
r1.question("please enter your name:",(name)=>{
  //basic input validation:trim whitespaces and escape
  const safeName=name.replace(/[<>]/g,"").trim()
  console.log(`You entered ${safeName}`)
})

//Listen for close event and exit safely
r1.on("close",()=>{
  console.log("interface closed")
  process.exit(0)
})