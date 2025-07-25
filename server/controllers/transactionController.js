const { Transaction } = require('../models');
const midtransClient = require('midtrans-client');
const dotenv = require('dotenv')
dotenv.config()


class TransactionController {

    static async createTransaction(req, res, next) {
        try {
            const { amount, method, TransactionId, paidAt } = req.body;

            const transaction = await Transaction.create({
                UserId: req.user.UserId,
                amount,
                method,
                TransactionId,
                paidAt,
            });

            res.status(201).json({ transaction });
        } catch (err) {
            console.log("ERROR CREATE TRANSACTION", err);
            next(err);
        }
    };

    static async getMyTransactions(req, res, next) {
        try {
            const userId = req.user.id;

            const transactions = await Transaction.findAll({
                where: { UserId: userId },
                order: [['createdAt', 'DESC']],
                attributes: ['id', 'amount', 'transactionId', 'paidAt', 'method'],
            });

            res.status(200).json(transactions);
        } catch (err) {
            console.log("ERROR GET TRANSACTIONS", err);
            next(err);
        }
    }

    static async initiateMidtransTrx(req, res, next) {
        try {

            const orderId = Math.random().toString()
            const amount = 30_000

            let snap = new midtransClient.Snap({
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

            await Transaction.create({
                UserId: req.user.id,
                amount,
                orderId
            })

            res.status(201).json({ transactionToken })
        } catch (err) {
            console.log("ERROR GET ALL TRANSACTIONS", err);
            next(err);
        }
    };

}

module.exports = TransactionController;