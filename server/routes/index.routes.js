const express = require('express');
const app = express();
const authRouter = require('./auth.routes');
const userRouter = require('./users.routes')
const reportRouter = require('./reports.routes');
const commentRouter = require('./comments.routes');
const transactionRouter = require('./transactions.routes');
const citizensRouter = require('./citizens.routes');
const addressRouter = require('./address.routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/reports', reportRouter);
app.use('/comments', commentRouter);
app.use('/citizens', citizensRouter);
app.use('/transactions', transactionRouter);
app.use('/addresses', addressRouter);
