const express = require('express');
const usersController = require('../controllers/usersController');
const authentication = require('../middleware/authentication');

const userRouter = express.Router();

userRouter.use(authentication)
userRouter.get('/me', usersController.getProfile);

module.exports = userRouter;
