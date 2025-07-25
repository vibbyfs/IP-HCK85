'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.belongsTo(models.Category)
      Report.belongsTo(models.User)
      Report.hasMany(models.Comment)
    }
  }
  Report.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required"
        },
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description is required"
        },
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Category is required"
        },
        notEmpty: {
          msg: "Category is required"
        }
      }
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,

    }
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};