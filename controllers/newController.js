const db = require('../models/queries');

const { body, validationResult, matchedData } = require('express-validator');

const validateMessage = [
  body('messageName').trim().notEmpty().isAlpha().isLength({ min: 1, max: 20 }),
  body('messageBody').trim().notEmpty().isLength({ min: 1, max: 200 }).escape(),
];

function getNewMessageForm(req, res) {
  res.render('form', {
    title: 'New Message',
  });
}

const postNewMessageForm = [
  validateMessage,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('form', {
        title: 'New Message',
        errors: errors.array(),
      });
    }
    const { messageName, messageBody } = matchedData(req);
    const curDate = new Date();

    db.addMessage(messageName, messageBody, curDate);

    res.redirect('/');
  },
];

module.exports = {
  getNewMessageForm,
  postNewMessageForm,
};
