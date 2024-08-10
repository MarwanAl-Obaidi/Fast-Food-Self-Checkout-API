const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Security-Policy",
    "img-src 'self'"
  );
  res.sendFile(path.join(__dirname, '/menu/menu.json'));
});

app.get('/welcomeCover.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/siteAssets/welcome/welcomeCover.jpg'));
});

app.get('/hamburger.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/menu/assets/hamburger.jpg'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});