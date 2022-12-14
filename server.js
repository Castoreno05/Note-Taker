const express = require("express");
const path = require("path");
const api = require('./routes/api');

const app = express();
// Add a port
const port = process.env.PORT || 5001;

// Allows data to be parsed 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Develop/public"));
app.use('/api', api);

// Create routes that will serve up the 'notes.html' page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);
// Create routes that will serve up the 'index.html' home page
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);
app.listen(port, () => console.log(`App Listening at http://localhost:${port}`));
