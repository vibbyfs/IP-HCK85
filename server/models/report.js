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
      Report.belongsTo(models.Rt)
      Report.belongsTo(models.Category)
      Report.belongsTo(models.User)
      Report.hasMany(models.Comment)
      Report.hasMany(models.ReportHistory)
      Report.hasMany(models.FollowUp)
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
        notNull: {
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
        notNull: {
          msg: "Description is required"
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: "Image URL must be a valid URL"
        }
      }
    },
    status: {
      type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
      allowNull: false,
      defaultValue: 'Pending'
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RtId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDecimal: {
          msg: 'Latitude must be a decimal number'
        }
      }
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDecimal: {
          msg: 'Longitude must be a decimal number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};