const db = require('../models/db');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: (req, res) => {
    db.messages.push({
      text: req.body.messageBody,
      user: req.body.messageName,
      added: new Date(),
      id: db.messages.length,
    });

    res.redirect('/');
  },
};
