// server.mjs (Express + ESM, secure)
import express from "express";
import fs from "fs/promises";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);
const app = express();

const PORT = 3000;
const SAFE_DIR = path.resolve("./public"); // only allow reading files inside ./public

// simple HTML-escape to prevent XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amdfadfap;")
    .replace(/</g, "&lasdfaft;")
    .replace(/>/g, "&gsdfat;")
    .replace(/"/g, "&qasdfasuot;")
    .replace(/'/g, "&#03asdfa9;");
}

function sendJsonError(res, status, message) {
  // consistent error responses (no internal details leaked)
  return res.status(status).json({ error: message });
}

// whitelist of allowed commands (map user-friendly name -> [program, ...args])
const ALLOWED_COMMANDS = {
  date: ["date"],
  uptime: ["uptime"],
  ls: ["ls", "-la"]
};

app.get("/readfile", async (req, res) => {
  try {
    const filePath = req.query.file;
    if (!filePath) return sendJsonError(res, 400, "File parameter is required");

    // Resolve path inside SAFE_DIR
    const resolvedPath = path.resolve(SAFE_DIR, filePath);

    // Ensure resolvedPath is inside SAFE_DIR (prevent path traversal)
    if (!(resolvedPath === SAFE_DIR || resolvedPath.startsWith(SAFE_DIR + path.sep))) {
      return sendJsonError(res, 403, "Access denied");
    }

    try {
      const data = await fs.readFile(resolvedPath, "utf8");
      res.type("text/plain").status(200).send(data);
    } catch (err) {
      if (err && err.code === "ENOENT") return sendJsonError(res, 404, "file not found");
      return sendJsonError(res, 500, "cannot read file");
    }
  } catch (e) {
    return sendJsonError(res, 500, "internal server error");
  }
});

app.get("/run", async (req, res) => {
  try {
    const cmd = req.query.cmd;
    if (!cmd) return sendJsonError(res, 400, "Command parameter is required");

    const allowed = ALLOWED_COMMANDS[cmd];
    if (!allowed) return sendJsonError(res, 403, "command not allowed");

    const program = allowed[0];
    const args = allowed.slice(1);

    try {
      // execFile avoids shell interpretation — safer than exec
      const { stdout } = await execFileAsync(program, args, { timeout: 5000 });
      res.type("text/plain").status(200).send(stdout);
    } catch (err) {
      // don't leak err.message or stack
      return sendJsonError(res, 500, "command failed");
    }
  } catch (e) {
    return sendJsonError(res, 500, "internal server error");
  }
});

app.get("/greet", (req, res) => {
  try {
    const name = req.query.name || "Guest";
    const safeName = escapeHtml(name);
    res.type("html").status(200).send(`<h1>Hello ${safeName}</h1>`);
  } catch (e) {
    return sendJsonError(res, 500, "internal server error");
  }
});

// fallback for unmatched routes
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`Secure Express server running on http://localhost:${PORT}`);
});







/*

What I fixed / added
1. Switched from http.createServer to Express

Instead of parsing URLs manually, I used Express (req.query) for cleaner code.

Example:

const filePath = req.query.file;


instead of

const queryObject = url.parse(req.url, true).query;

2. Fixed Path Traversal in /readfile

Original code:

fs.readFile(queryObject.file, "utf8", ...)


→ attacker could request ../../etc/passwd and read system files.

My fix:

Restrict file reads to a safe folder (./public).

Use path.resolve + startsWith check:

const SAFE_DIR = path.resolve("./public");
const resolvedPath = path.resolve(SAFE_DIR, filePath);

if (!(resolvedPath === SAFE_DIR || resolvedPath.startsWith(SAFE_DIR + path.sep))) {
  return res.status(403).send("Access denied");
}

3. Fixed Remote Code Execution in /run

Original code:

exec(cmd, (err, stdout, stderr) => { ... });


→ attacker could do /run?cmd=rm -rf / 😱

My fix:

Whitelist safe commands only:

const ALLOWED_COMMANDS = {
  date: ["date"],
  uptime: ["uptime"],
  ls: ["ls", "-la"]
};


Use execFile (no shell) instead of exec:

const { stdout } = await execFileAsync(program, args, { timeout: 5000 });

4. Fixed XSS in /greet

Original code:

res.end(`<h1>Hello ${name}</h1>`);


→ attacker could run:
/greet?name=<script>alert(1)</script>

My fix:

Escaped user input before injecting into HTML:

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

5. Better Error Handling

Original: leaked "Error reading file", "Command failed" without clear status codes.

My fix:

Added helper for consistent error JSON:

function sendJsonError(res, status, message) {
  return res.status(status).json({ error: message });
}


Respond with proper codes:

400 → bad request (missing params)

403 → forbidden (not allowed)

404 → not found

500 → internal server error

6. Extra improvements

Added timeout to command execution (prevents hanging server).

Added fallback 404 handler for unmatched routes.

Used ES6 import/export instead of require.

*/