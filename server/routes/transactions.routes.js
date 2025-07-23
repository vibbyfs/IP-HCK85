const express = require('express');
const transactionsController = require('../controllers/transactionController');
const authentication = require('../middleware/authentication');

const transactionRoute = express.Router();

transactionRoute.use(authentication)
transactionRoute.post('/add', transactionsController.createTransaction);
transactionRoute.get('/my', transactionsController.getMyTransactions);
transactionRoute.get('/', transactionsController.getAllTransactions);

module.exports = transactionRoute;
