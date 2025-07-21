'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User)
      Comment.belongsTo(models.Report)
    }
  }
  Comment.init({
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Content is required'
        },
        notEmpty: {
          msg: 'Content is required'
        },
        len: {
          args: [3],
          msg: 'Content must be at least 3 characters long'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};