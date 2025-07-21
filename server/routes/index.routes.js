const express = require('express');
const app = express();
const authRouter = require('./auth.routes');
const userRouter = require('./users.routes')
const reportRouter = require('./reports.routes');
const commentRouter = require('./comments.routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/reports', reportRouter);
app.use('/comments', commentRouter);
