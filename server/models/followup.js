'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FollowUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FollowUp.belongsTo(models.Report)
    }
  }
  FollowUp.init({
    ReportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "Image URL must be a valid URL"
        }
      }
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FollowUp',
  });
  return FollowUp;
};