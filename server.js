const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /notes or /index')
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/index', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`)
);