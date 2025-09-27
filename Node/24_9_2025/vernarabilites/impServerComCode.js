Response 1

Perfect 👍 You want practice questions like the one you gave me: I write a Node.js app (intentionally vulnerable), and your task is to spot + fix vulnerabilities. This is exactly the kind of thing Karat or security-heavy interviews do.

Here are 5 more practice questions for you:

🔥 Question 1: SQL Injection
// vulnerable-sql.js
import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const db = new sqlite3.Database(":memory:");

// Setup table
db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
db.run("INSERT INTO users (username, password) VALUES ('praveen', 'secret')");

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  db.get(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
    (err, row) => {
      if (row) res.send("Login success");
      else res.send("Login failed");
    }
  );
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


👉 Task: Spot the vulnerability. Show how an attacker could log in without a password. Fix it.

🔥 Question 2: Path Traversal (Download endpoint)
// vulnerable-download.js
import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.get("/download", (req, res) => {
  const file = req.query.file; // e.g. notes.txt
  const filePath = path.join(__dirname, "files", file);
  fs.createReadStream(filePath).pipe(res);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


👉 Task: Spot the vulnerability. How could someone steal /etc/passwd? Fix it.

🔥 Question 3: No Rate Limiting (Brute force login)
// vulnerable-bruteforce.js
import express from "express";

const app = express();
const PASSWORD = "supersecret";

app.get("/auth", (req, res) => {
  const { password } = req.query;
  if (password === PASSWORD) return res.send("Access granted");
  res.status(401).send("Unauthorized");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


👉 Task: What’s the vulnerability? How would you abuse it? How to fix it (hint: middleware)?

🔥 Question 4: Hardcoded Secrets + No HTTPS
// vulnerable-secrets.js
import express from "express";

const app = express();

// 🔥 Hardcoded secret key
const SECRET_KEY = "mysecretapikey123";

app.get("/data", (req, res) => {
  const apiKey = req.query.key;
  if (apiKey === SECRET_KEY) {
    res.send("Sensitive Data");
  } else {
    res.status(403).send("Forbidden");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


👉 Task: What’s wrong here? What if this runs on plain HTTP? How to fix?

🔥 Question 5: XSS in Chat App
// vulnerable-chat.js
import express from "express";

const app = express();
const messages = [];

app.get("/send", (req, res) => {
  const { msg } = req.query;
  messages.push(msg);
  res.send("Message received");
});

app.get("/messages", (req, res) => {
  res.send(messages.join("<br>"));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


👉 Task: Show how an attacker could inject <script>alert(1)</script>. How do you sanitize or escape output?

⚡ These 5 cover:

SQL Injection

Path Traversal

Brute force (no rate limiting)

Hardcoded secrets + HTTP

XSS

Exactly the top vulnerabilities interviewers love.

Do you want me to also give you the fixed versions (like I did before with Express + ES6), or should I just keep feeding you raw vulnerable apps so you practice fixing them yourself first?

I prefer this response