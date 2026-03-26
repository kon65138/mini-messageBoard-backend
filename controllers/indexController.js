const db = require('../models/queries');

module.exports = {
  get: async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', {
      title: 'Mini messageboard',
      messages: messages,
    });
  },
};
