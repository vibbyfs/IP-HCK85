const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/users.routes')
const reportRouter = require('./routes/reports.routes')
const commentRouter = require('./routes/comments.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/reports', reportRouter)
app.use('/comments', commentRouter)


module.exports = app