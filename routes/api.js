const api = require("express").Router();
const { channel } = require("diagnostics_channel");
const fs = require("fs");
const uuid = require("../helpers/uuid");

api.get("/notes", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      res.json(JSON.parse(data));
    }
  });
});

api.post("/notes", (req, res) => {
  const { text, title } = req.body;
  if (text && title) {
    // Variable for the object we will save
    const newNote = {
      text,
      title,
      id: uuid(),
    };

    // Obtain existing notes
    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);

        // Add a new note
        parsedNotes.push(newNote);

        // Write updated notes into the file
        fs.writeFile(
          "./Develop/db/db.json",
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated reviews!")
        );
      }
    });

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting review");
  }
});

// Delete notes using the id
api.delete("/notes/:id", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
    const { id } = req.params
    if (err) {
      console.error(err);
    } else {
      console.log(data)
      res.json(JSON.parse(data));
    }
  });
});

module.exports = api;
