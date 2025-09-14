// import {createServer} from 'http'

// const server=createServer()

// function requestCallback(request,response){
//     response.writeHead(200);
//     response.end(`reqest received`)
// }

// server.on( `request`, requestCallback)

// server.listen(3000)



// import { createServer } from 'http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, this is a simple Node server!');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


import {createServer} from 'http';

const server=createServer((req,res)=>{
    res.writeHead(200,{"Content-type":'text/plain'});// you can see this by inspecting going into network and going to headers
    res.end("hi this is simple node server sample server program")
})

server.listen(4000,()=>{
    console.log("the server is running at http://localhost:3000/")
})


// The main difference is in how the request handler is attached:

// Your program:
// You create the server with createServer() (no arguments), then use server.on('request', requestCallback) to attach the request handler.

// My earlier program:
// The request handler function is passed directly to createServer(requestCallback) when creating the server.

// Both approaches work the same way—the request handler is called for every incoming HTTP request.
// Passing the handler directly to createServer is more concise, but functionally both are equivalent.