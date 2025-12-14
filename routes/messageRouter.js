const { Router } = require('express');

const messageRouter = Router();

const controller = require('../controllers/messagesController');

messageRouter.get('/:messageId', controller.getMsgById);

module.exports = messageRouter;
