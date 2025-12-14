const db = require('../models/db');

module.exports = {
  get: (req, res) => {
    res.render('index', {
      title: 'Mini messageboard',
      messages: db.messages,
    });
  },
};
