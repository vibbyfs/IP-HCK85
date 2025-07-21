'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { hashPassword } = require('../helpers/bcryptjs');
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role)
      User.belongsTo(models.Rt)
      User.hasMany(models.Report)
      User.hasMany(models.Comment)
      User.hasMany(models.ReportHistory)
      User.hasOne(models.Citizen);
      User.hasMany(models.Transaction);

    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must be unique'
      },
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Email format is invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        len: {
          args: [6],
          msg: 'Password minimum length is 6 character'
        }
      }
    },
    GoogleId: DataTypes.STRING,
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RtId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    approvedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
  });
  return User;
};