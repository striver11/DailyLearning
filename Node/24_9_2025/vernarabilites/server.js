// server.js
const http = require("http");
const url = require("url");
const fs = require("fs");
const { exec } = require("child_process");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.startsWith("/readfile")) {
    // Example: http://localhost:3000/readfile?file=notes.txt
    const filePath = queryObject.file;
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error reading file");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }

  else if (req.url.startsWith("/run")) {
    // Example: http://localhost:3000/run?cmd=ls
    const cmd = queryObject.cmd;
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Command failed");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(stdout);
    });
  }

  else if (req.url.startsWith("/greet")) {
    // Example: http://localhost:3000/greet?name=Praveen
    const name = queryObject.name;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello ${name}</h1>`);
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
