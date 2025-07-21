'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User);
    }
  }
  Transaction.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 1,
      },
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Midtrans', 'Manual', 'Qris', 'Bank Transfer', 'Gopay', 'ShopeePay', 'Other']],
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Pending', 'Paid', 'Failed', 'Expired', 'Canceled']],
      },
    },
    transactionId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};