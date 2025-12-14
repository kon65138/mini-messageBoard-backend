const messages = require('../models/messages');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: (req, res) => {
    messages.push({
      text: req.body.messageBody,
      user: req.body.messageName,
      added: new Date(),
    });

    res.redirect('/');
  },
};
