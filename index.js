
const { spawn } = require("child_process");
const log = require("./logger/log.js");

function startProject() {
	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("Restarting Project...");
			startProject();
		}
	});
}

startProject();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Import the database setup

const app = express();
app.use(bodyParser.json());

// Endpoint to handle incoming messages
app.post('/message', (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  db.get('SELECT reply FROM keyword_reply WHERE keyword = ?', [userMessage], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.json({ reply: row.reply });
    } else {
      res.json({ reply: "Sorry, I don't understand." });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
