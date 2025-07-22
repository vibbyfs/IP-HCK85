const { Transaction } = require('../models');


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

    static async getAllTransactions(req, res) {
        try {
            const transactions = await Transaction.findAll({
                order: [['createdAt', 'DESC']]
            });
            res.json(transactions);
        } catch (err) {
            console.log("ERROR GET ALL TRANSACTIONS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const transaction = await Transaction.findByPk(id);
            if (!transaction) {
                return res.status(404).json({ message: 'Transaction not found' });

            }

            transaction.status = status;
            await transaction.save();

            res.json({ message: `Transaction status updated to ${status}.`, transaction });
        } catch (err) {
            console.log("ERROR UPDATE TRANSACTION STATUS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

}

module.exports = TransactionController;