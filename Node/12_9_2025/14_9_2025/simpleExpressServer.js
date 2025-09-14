import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    res.status(200).send("hello this is simple exfsdfpress server")
})

app.listen(3000,()=>{
    console.log("express server started on the port 3000")
})




// In Express, you don't need to manually set the Content-Type header for plain text responses.
// When you use res.send('your text'), Express automatically sets Content-Type: text/html or text/plain based on the response content.

// If you want to explicitly set the content type in Express, you can use:
// app.get('/', (req, res) => {
//   res.set('Content-Type', 'text/plain');
//   res.status(200).send('Hello, this is a simple Express server!');
// });

// But for simple text responses, Express handles the headers for you, making your code cleaner and easier to write.





// Request URL
// http://localhost:3000/
// Request Method
// GET
// Status Code
// 304 Not Modified
// Remote Address
// [::1]:3000
// Referrer Policy
// strict-origin-when-cross-origin

// why do i see 304 when i sending 200 status in network tab of the chrome

// You see a 304 Not Modified status because the browser is using caching.
// When you revisit the URL, the browser sends a conditional request (with headers like If-None-Match or If-Modified-Since).
// If Express (or the underlying Node.js server) determines the resource hasn't changed, it responds with 304 instead of 200.

// Why?

// 304 means "use your cached copy, nothing has changed."
// Your code sends 200, but Express may optimize and send 304 if the browser asks for it.
// How to always get 200?

// Disable cache in Chrome DevTools (Network tab → "Disable cache").
// Or, hard-refresh the page (Ctrl+Shift+R).
// This is normal browser/server behavior for static responses. Your server is working correctly.