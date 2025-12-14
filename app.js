const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const assetsPath = path.join(__dirname, 'public');

const PORT = 3500;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`express app running at http://localhost:${PORT}`);
});
