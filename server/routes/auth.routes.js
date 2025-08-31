const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/login-google', authController.googleLogin);


module.exports = authRouter;

