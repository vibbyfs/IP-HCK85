'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReportHistory extends Model {
    static associate(models) {
      ReportHistory.belongsTo(models.User)
      ReportHistory.belongsTo(models.Report)
    }
  }
  ReportHistory.init({
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
      allowNull: false,
    },
    ChangedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'ReportHistory',
  });
  return ReportHistory;
};
