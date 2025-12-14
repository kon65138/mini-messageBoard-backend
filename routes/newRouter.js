const { Router } = require('express');

const newRouter = Router();

const controller = require('../controllers/newController');

newRouter.get('/', controller.get);
newRouter.post('/', controller.post);

module.exports = newRouter;
