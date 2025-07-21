const express = require('express');
const commentsController = require('../controllers/commentsController');

const commentRouter = express.Router({ mergeParams: true });

commentRouter.post('/', commentsController.createComment);
commentRouter.get('/', commentsController.listComments);
commentRouter.delete('/:commentId', commentsController.deleteComment);

module.exports = commentRouter;
