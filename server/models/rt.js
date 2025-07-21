'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rt.hasMany(models.User)
      Rt.hasMany(models.Report)
    }
  }
  Rt.init({
    rtNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RT number is required'
        },
        notEmpty: {
          msg: 'RT number is required'
        }
      }
    },
    rwNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RW number is required'
        },
        notEmpty: {
          msg: 'RW number is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Rt',
  });
  return Rt;
};