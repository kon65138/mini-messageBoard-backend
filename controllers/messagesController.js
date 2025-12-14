const db = require('../models/db');

module.exports = {
  getMsgById: (req, res) => {
    const { messageId } = req.params;
    const message = db.getMsgById(Number(messageId));
    res.render('message', { curMsg: message });
  },
};
