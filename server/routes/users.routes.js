const express = require('express');
const usersController = require('../controllers/usersController');
const authentication = require('../middleware/authentication');

const userRouter = express.Router();

userRouter.use(authentication)
userRouter.get('/pending', usersController.getPendingUsers);
userRouter.patch('/:id/approve', usersController.approveUser);
userRouter.delete('/:id', usersController.rejectUser);
userRouter.get('/me', usersController.getProfile);

module.exports = userRouter;
