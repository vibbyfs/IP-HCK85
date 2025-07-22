const express = require('express');
const commentsController = require('../controllers/commentsController');
const authentication = require('../middleware/authentication');

const commentRouter = express.Router({ mergeParams: true });

commentRouter.use(authentication)
commentRouter.post('/add', commentsController.createComment);
commentRouter.get('/', commentsController.listComments);
commentRouter.delete('/:commentId', commentsController.deleteComment);

module.exports = commentRouter;
