const { Transaction } = require('../models');
const midtransClient = require('midtrans-client');

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
           
            

        } catch (err) {
            console.log("ERROR GET ALL TRANSACTIONS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };



}

module.exports = TransactionController;