const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

// Middleware to log every request
app.use((req, res, next) => {
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) console.error("Failed to write log:", err);
  });
  next(); // pass control to next handler
});

// Routes
app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  res.send("I am praveen kumar");
});

// Catch-all for 404
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
