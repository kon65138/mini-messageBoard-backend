const db = require('../models/queries');

module.exports = {
  getMsgById: async (req, res) => {
    const { messageId } = req.params;
    const message = await db.getMsgById(messageId);
    res.render('message', { curMsg: message });
  },
};
