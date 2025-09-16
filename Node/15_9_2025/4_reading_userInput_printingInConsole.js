// Print welcome messages
console.log("Hello from Node.js")
console.log("This is my first Node.js app")

// Import readline with const
const readline = require('readline')
// Create interface once with explicit config
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Prompt for user's name
rl.question("Please enter your name: ", (name) => {
  // Basic input validation: trim whitespace and escape
  const safeName = name.replace(/[<>]/g, "").trim()
  console.log(`You entered "${safeName}"`)
  rl.close()
})

// Listen for close event and exit safely
rl.on("close", () => {
  console.log("Interface closed")
  process.exit(0)
})
