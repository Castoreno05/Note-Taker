const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.static('Develop/public'));

// Create routes that will serve up the 'index.html' home page
app.get('/', (req, res) => res.send('Send to /index')
);
// Create routes that will serve up the 'notes.html' page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
);
app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`)
);