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

const images = [
  { name: 'hamburger', path: '/menu/assets/hamburgers/hamburger.jpg' },
  { name: 'cheeseBurger', path: '/menu/assets/hamburgers/cheeseBurger.jpg' },
  { name: 'chickenBurger', path: '/menu/assets/hamburgers/chickenBurger.jpg' },
  { name: 'fishBurger', path: '/menu/assets/hamburgers/fishBurger.jpg' },
];

images.forEach((image) => {
  app.get(`/${image.name}.jpg`, (req, res) => {
    res.sendFile(path.join(__dirname, image.path));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});