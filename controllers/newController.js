const db = require('../models/queries');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: (req, res) => {
    const curDate = new Date();

    db.addMessage(req.body.messageBody, req.body.messageName, curDate);

    res.redirect('/');
  },
};
