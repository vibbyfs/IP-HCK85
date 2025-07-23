const express = require('express');
const commentsController = require('../controllers/commentsController');
const authentication = require('../middleware/authentication');

const commentRouter = express.Router({ mergeParams: true });

commentRouter.use(authentication);

commentRouter.get('/', commentsController.listComments)
commentRouter.post('/add', commentsController.createComment);
commentRouter.delete('/:commentId', commentsController.deleteComment)

module.exports = commentRouter;
