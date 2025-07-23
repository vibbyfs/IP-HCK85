const { Transaction } = require('../models');
const midtransClient = require('midtrans-client');
const dotenv = require('dotenv')
dotenv.config()


class TransactionController {

    static async createTransaction(req, res) {
        try {
            const { amount, method, TransactionId, paidAt } = req.body;

            const transaction = await Transaction.create({
                UserId: req.user.UserId,
                amount,
                method,
                TransactionId,
                paidAt,
            });

            res.status(201).json({ message: 'Transactions successful', transaction });
        } catch (err) {
            console.log("ERROR CREATE TRANSACTION", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async getMyTransactions(req, res) {
        try {
            const transactions = await Transaction.findAll({
                where: { UserId: req.user.UserId },
                order: [['createdAt', 'DESC']]
            });
            res.json(transactions);
        } catch (err) {
            console.log("ERROR GET MY TRANSACTIONS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async initiateMidtransTrx(req, res) {
        try {

            const orderId = Math.random().toString()
            const amount = 30_000

            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_API_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": amount
                },
                "credit_card": {
                    "secure": true
                }
            };

            const transaction = await snap.createTransaction(parameter)
            let transactionToken = transaction.token
            // console.log(transactionToken);


            await Transaction.create({
                UserId: req.user.id,
                amount,
                orderId
            })

            res.status(201).json({transactionToken})
        } catch (err) {
            console.log("ERROR GET ALL TRANSACTIONS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };



}

module.exports = TransactionController;