const express = require('express');
const transactionsController = require('../controllers/transactionController');
const authentication = require('../middleware/authentication');

const transactionRoute = express.Router();

transactionRoute.use(authentication)
transactionRoute.get('/', transactionsController.getMyTransactions);
transactionRoute.post('/add', transactionsController.createTransaction);
transactionRoute.get('/midtrans/initiate', transactionsController.initiateMidtransTrx);

module.exports = transactionRoute;
