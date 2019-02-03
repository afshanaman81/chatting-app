const express = require('express');
const path = require('path');

const PORT = 4000;
const app = express();

// Middleware


// Routes
app.use('/', (req, res) => res.sendFile('/index.html'));


app.listen(PORT, () => {
  console.log(`Private Messaging Service Listening on ${PORT}`);
});
module.exports = app;
