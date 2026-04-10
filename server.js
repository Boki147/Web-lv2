const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.redirect('/slike');
});

// GALERIJA 
app.get('/slike', (req, res) => {
  const dataPath = path.join(__dirname, 'images.json');
  const images = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  res.render('slike', { images });
});


app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});