const { Router } = require('express');

const newRouter = Router();

const controller = require('../controllers/newController');

newRouter.get('/', controller.getNewMessageForm);
newRouter.post('/', controller.postNewMessageForm);

module.exports = newRouter;
