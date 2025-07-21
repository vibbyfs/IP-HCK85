'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Report)
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Name cateogry must be unique'
      },
      validate: {
        notNull: {
          msg: 'Name cateogry is required'
        },
        notEmpty: {
          msg: 'Name cateogry is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};