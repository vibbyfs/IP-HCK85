if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/users.routes')
const reportRouter = require('./routes/reports.routes')
const commentRouter = require('./routes/comments.routes')
const citizensRouter = require('./routes/citizens.routes')
const transactionRouter = require('./routes/transactions.routes')
const addressRouter = require('./routes/address.routes')
const categoriesRouter = require('./routes/categories.routes')
const errorHandler = require('./middleware/errorHandling')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/reports', reportRouter)
app.use('/comments', commentRouter)
app.use('/citizens', citizensRouter);
app.use('/transactions', transactionRouter);
app.use('/addresses', addressRouter);
app.use('/categories', categoriesRouter);

app.use(errorHandler)


module.exports = app

