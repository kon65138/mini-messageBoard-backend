const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require('./routes/messageRouter');
const assetsPath = path.join(__dirname, 'public');

const PORT = 3500;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

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
